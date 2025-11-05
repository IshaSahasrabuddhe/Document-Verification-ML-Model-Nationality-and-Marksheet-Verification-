document.addEventListener('DOMContentLoaded', function() {
    const docCategory = document.getElementById('docCategory');
    const docType = document.getElementById('docType');
    const fileUpload = document.getElementById('fileUpload');
    const preview = document.getElementById('preview');
    const submitBtn = document.getElementById('submitBtn');
    const verificationForm = document.getElementById('verificationForm');
    
    // Document type options based on category
    const docTypeOptions = {
        nationality: [
            { value: 'aadhaar', text: 'Aadhaar' },
            { value: 'domicile', text: 'Domicile Certificate' }
        ],
        marksheet: [
            { value: 'ssc', text: 'SSC' },
            { value: 'hsc', text: 'HSC' },
            { value: 'cet', text: 'CET' }
        ]
    };
    
    // Update document type options when category changes
    docCategory.addEventListener('change', function() {
        const category = this.value;
        
        // Clear current options
        docType.innerHTML = '<option value="" selected disabled>Select Document Type</option>';
        
        if (category && docTypeOptions[category]) {
            docType.disabled = false;
            
            // Add new options
            docTypeOptions[category].forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                docType.appendChild(optionElement);
            });
        } else {
            docType.disabled = true;
        }
        
        checkFormValidity();
    });
    
    // Update document type options when type changes
    docType.addEventListener('change', checkFormValidity);
    
    // Preview image when file is selected
    fileUpload.addEventListener('change', function() {
        const file = this.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            
            reader.readAsDataURL(file);
        } else {
            preview.style.display = 'none';
        }
        
        checkFormValidity();
    });
    
    // Check if form is valid to enable submit button
    function checkFormValidity() {
        if (docCategory.value && docType.value && fileUpload.files.length > 0) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }
    
    // Form submission with loading state
    verificationForm.addEventListener('submit', function() {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Verifying...';
    });
});