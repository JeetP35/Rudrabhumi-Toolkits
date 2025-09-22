document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        Programming: document.getElementById('programming'),
        '3DM&A': document.getElementById('3d-modeling'),
        AV_Assets: document.getElementById('art-assets'),
        Doc: document.getElementById('documentation'),
        videoEditing: document.getElementById('video-editing'),
        audioEditing: document.getElementById('audio-editing'),
        LR: document.getElementById('learning-resources')
    };

    const navOffset = 80; // navbar height

    Object.keys(sections).forEach(id => {
        const button = document.getElementById(id);
        if (button && sections[id]) {
            button.addEventListener('click', function() {
                const elementPosition = sections[id].getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            });
        }
    });
});