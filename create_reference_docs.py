import cv2
import numpy as np
import os

# Create directories if they don't exist
os.makedirs('reference_documents/nationality', exist_ok=True)
os.makedirs('reference_documents/marksheet', exist_ok=True)

# Create a simple placeholder image function
def create_placeholder_image(width, height, text, filename):
    # Create a white image
    img = np.ones((height, width, 3), np.uint8) * 255
    
    # Add text
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 1
    color = (0, 0, 0)  # Black
    thickness = 2
    
    # Get text size
    text_size = cv2.getTextSize(text, font, font_scale, thickness)[0]
    text_x = (width - text_size[0]) // 2
    text_y = (height + text_size[1]) // 2
    
    # Put text on image
    cv2.putText(img, text, (text_x, text_y), font, font_scale, color, thickness)
    
    # Save the image
    cv2.imwrite(filename, img)
    print(f"Created placeholder image: {filename}")

# Create placeholder reference documents
create_placeholder_image(800, 600, "PASSPORT REFERENCE", "reference_documents/nationality/passport_ref.jpg")
create_placeholder_image(800, 600, "DOMICILE CERTIFICATE REFERENCE", "reference_documents/nationality/domicile_ref.jpg")
create_placeholder_image(800, 600, "SSC MARKSHEET REFERENCE", "reference_documents/marksheet/ssc_ref.jpg")
create_placeholder_image(800, 600, "HSC MARKSHEET REFERENCE", "reference_documents/marksheet/hsc_ref.jpg")
create_placeholder_image(800, 600, "CET SCORECARD REFERENCE", "reference_documents/marksheet/cet_ref.jpg")

print("All placeholder reference documents created successfully!")