function updateProfilePic() {
    const fileInput = document.getElementById('profile-pic-upload');
    const profilePicPreview = document.getElementById('profile-pic-preview');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicPreview.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function saveProfile() {
    alert('Profile changes saved successfully!');
    
    // Add logic here to save updated user details to a server or local storage
}
