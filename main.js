document.addEventListener('DOMContentLoaded', function() {
    var liensTemoignages = document.querySelectorAll('.temoignage');
    var headerHeight = document.getElementById('monHeader').offsetHeight;

    liensTemoignages.forEach(function(lien) {
        lien.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var liensaPropos = document.querySelectorAll('.aPropos');
    var headerHeight = document.getElementById('monHeader').offsetHeight;

    liensaPropos.forEach(function(lien) {
        lien.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var liensprojets = document.querySelectorAll('.projets');
    var headerHeight = document.getElementById('monHeader').offsetHeight;

    liensprojets.forEach(function(lien) {
        lien.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function redirectToLink(link) {
    // Rediriger vers le lien
    window.location.href = link;
  }