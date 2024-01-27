function sendLike(carModel) {
    var emailSubject = "Interested in " + carModel;
    var emailBody = "Hello,\n\nI am interested in the " + carModel + ". Please provide me with more information.\n\nBest regards,\n[Your Name]";
    window.location.href = "mailto:musabrana884@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);
}