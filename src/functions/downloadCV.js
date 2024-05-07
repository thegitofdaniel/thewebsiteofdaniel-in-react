function downloadCV() {
    fetch('https://thewebsiteofdaniel-files.s3.amazonaws.com/cv/CV+-+Daniel+Ruiz.pdf')
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'CV - Daniel Ruiz.pdf'; // The specified filename for download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a); // Clean up
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Download failed!'));
}

export default downloadCV;