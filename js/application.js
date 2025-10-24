document.addEventListener('DOMContentLoaded', function () {
    const applicationForm = document.getElementById('laptopApplicationForm');
    const checkStatusBtn = document.getElementById('checkStatus');
    const statusResult = document.getElementById('statusResult');

    // Form submission
    if (applicationForm) {
        applicationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // In a real application, you would send the form data to a server
            // For this example, we'll just show a success message
            alert('Your application has been submitted successfully! You will receive a confirmation email shortly.');
            applicationForm.reset();
        });
    }

    // Check application status
    if (checkStatusBtn) {
        checkStatusBtn.addEventListener('click', function () {
            const cnic = document.getElementById('statusCnic').value;

            if (!cnic) {
                statusResult.textContent = 'Please enter your CNIC number.';
                statusResult.className = 'status-result error';
                return;
            }

            // In a real application, you would check against a database
            // For this example, we'll simulate different responses based on the CNIC

            // Simulate API call
            setTimeout(() => {
                const responses = [
                    { status: 'approved', message: 'Congratulations! Your application has been approved. You will receive your laptop within 30 days.' },
                    { status: 'processing', message: 'Your application is currently being processed. Please check back in 2 weeks.' },
                    { status: 'pending', message: 'Your application is pending verification. We will update you once verification is complete.' },
                    { status: 'rejected', message: 'We regret to inform you that your application has been rejected due to incomplete documentation.' }
                ];

                // Pick a random response for demo purposes
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];

                statusResult.textContent = randomResponse.message;
                statusResult.className = `status-result ${randomResponse.status === 'approved' ? 'success' : 'error'}`;
            }, 1000);
        });
    }
});