function showAlert(messageHtml) {
  const alertDiv = document.createElement('div');
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '10px';
  alertDiv.style.left = '50%';
  alertDiv.style.transform = 'translateX(-50%)';
  alertDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
  alertDiv.style.color = 'white';
  alertDiv.style.padding = '12px 24px';
  alertDiv.style.borderRadius = '8px';
  alertDiv.style.fontSize = '1rem';
  alertDiv.style.fontWeight = 'bold';
  alertDiv.style.zIndex = '99999';
  alertDiv.style.maxWidth = '90vw';
  alertDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  alertDiv.style.textAlign = 'center';
  alertDiv.innerHTML = messageHtml;
  document.body.appendChild(alertDiv);
}

const allowedHosts = ["moipourtoi.com", "disonsdemain.fr", "jecontacte.com", "lovoo.com", "meetic.com", "badoo.com", "tinder.com", "meetic.fr", "freemeet.net", "vivaflirt.fr", "fdating.com", "superencontre.com", "placedescelibataires.fr", "proximeety.fr", "jolie-rencontre.com", "celibatairesduweb.com", "eliterencontre.fr", "seules.fr", "becoquin.com", "becoquin.fr", "gleeden.com", "celilove.com", "matchou.com", "edarling.fr", "amiez.org", "smail.fr", "oulfa.fr", "mektoube.fr", "parship.fr", "theotokos.fr", "bearwww.com", "grindr.fr", "grindr.com", "chat-caramail.fr", "tchatpassion.com", "gareauxamoureux.com", "nice-match.com", "tongay.com", "le-beguin.fr", "blogspot.com", "wordpress.com", "facebook.com", "instagram.com", "threads.com", "x.com", "twitter.com", "pinterest.com", "snapchat.com"];
const currentHost = window.location.hostname;
const bodyText = document.body.innerText.toLowerCase();

function containsPhrase(phrase) {
  return bodyText.includes(phrase);
}

function containsAnyPhrase(phrases) {
  return phrases.some(p => containsPhrase(p));
}

function isAllowedHost(host, allowedList) {
  return allowedList.some(domain => host.endsWith(domain));
}

if (isAllowedHost(currentHost, allowedHosts)) {
  if (containsPhrase("coucou bonjour", "salut coucou", "coucou salut")) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Ce compte semble relativement faux, avec des termes régulièrement utilisés par des escrocs. Nous vous recommandons de ne pas entrer en contact avec ce compte ou de lui envoyer de l'argent. Il est conseillé de bloquer ce compte.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.ouest-france.fr/societe/faits-divers/cest-lennemi-numero-1-des-brouteurs-cette-mere-au-foyer-chasse-et-hacke-les-escrocs-sur-le-net-336cc8a6-bc5d-11ee-9585-6393a6758e42" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
  } else if (containsPhrase("chien mange pas chien")) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Cette expression est régulièrement utilisée par des escrocs qui ne s'escroquent pas entre eux. Soyez très vigilant avec ce genre de comptes.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.ladepeche.fr/2024/09/09/arnaques-telephoniques-un-specialiste-partage-les-indicatifs-dont-il-faut-le-plus-se-mefier-avant-de-decrocher-12186787.php" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
  } else if (containsAnyPhrase(["756", "07 56", "0756", "+33756", "644", "06 44", "0644", "+33644"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Les numéros 07 56 ou 06 44 sont souvent utilisés par les escrocs d'Afrique de l'Ouest (brouteurs) et ne sont pas dignes de confiance. Le profil de la personne que vous consultez est très probablement faux. N'hésitez pas à le bloquer et à le signaler.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.ladepeche.fr/2024/09/09/arnaques-telephoniques-un-specialiste-partage-les-indicatifs-dont-il-faut-le-plus-se-mefier-avant-de-decrocher-12186787.php" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
      } else if (containsAnyPhrase(["757", "07 57", "0757", "+33757", "0780", "780", "07 80", "+33780"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Le numéro Onoff affiché par le compte ici sont souvent utilisés par les escrocs d'Afrique de l'Ouest (brouteurs) et ne sont pas dignes de confiance. Le profil de la personne que vous consultez est très probablement faux. N'hésitez pas à le bloquer et à le signaler.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.ladepeche.fr/2024/09/09/arnaques-telephoniques-un-specialiste-partage-les-indicatifs-dont-il-faut-le-plus-se-mefier-avant-de-decrocher-12186787.php" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
    } else if (containsAnyPhrase(["605", "0605", "06 05", "+33605", "751", "0751", "07 51", "+33751", "753", "0753", "07 53", "+33753", "758", "0758", "07 58", "+33758"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Le numéro Lycamobile affiché par le compte ici sont souvent utilisés par les escrocs d'Afrique de l'Ouest (brouteurs) et ne sont pas dignes de confiance. Le profil de la personne que vous consultez est très probablement faux. N'hésitez pas à le bloquer et à le signaler.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.ladepeche.fr/2024/09/09/arnaques-telephoniques-un-specialiste-partage-les-indicatifs-dont-il-faut-le-plus-se-mefier-avant-de-decrocher-12186787.php" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
    } else if (containsAnyPhrase(["medium", "médium", "voyant", "voyante"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Les personnes s'affichant comme "médium" ou "voyantes" n'ont aucune compétence ni formation existante. Les médiums sont souvent douteux et il est recommandé de ne pas les contacter.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.tf1info.fr/societe/video-reportage-sept-a-huit-life-je-croyais-vraiment-qu-il-y-avait-cette-magie-noire-des-victimes-d-arnaque-a-la-voyance-temoignent-2392062.html" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
    } else if (containsAnyPhrase(["femme sérieuse", "relation sérieuse et durable", "homme sérieux", "homme sincère", "ample connaissance"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Des termes régulièrements utilisés par les escrocs ("brouteurs" notamment) ont été détectés sur ce profil. Il est important de l'éviter et de ne pas le contacter.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.ladepeche.fr/2024/09/09/arnaques-telephoniques-un-specialiste-partage-les-indicatifs-dont-il-faut-le-plus-se-mefier-avant-de-decrocher-12186787.php" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
    } else if (containsAnyPhrase(["225"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Le chiffre "225" parfois vu dans un pseudonyme ou une adresse e-mail fait référence à l'indicatif téléphonique de la Côte d'Ivoire. Malheureusement, ce numéro est souvent associé à des escrocs en ligne appelés "brouteurs", ce qui peut être un signe négatif à prendre en compte.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.indicatifs.fr/cote-divoire" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
    } else if (containsAnyPhrase(["229"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Le chiffre "229" parfois vu dans un pseudonyme ou une adresse e-mail fait référence à l'indicatif téléphonique du Bénin. Malheureusement, ce numéro est souvent associé à des escrocs en ligne, ce qui peut être un signe négatif à prendre en compte.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.indicatifs.fr/benin" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
    } else if (containsAnyPhrase(["google chat", "google hangouts", "google hangout", "hangouts", "hangoute", "hangout", "skype"])) {
    showAlert(`
      <div style="font-size: 1.5rem; margin-bottom: 8px;">Escroc détecté</div>
      <div>Les plateformes comme Google Hangouts, Google Chat ou Skype sont souvent utilisées par des escrocs pour contacter leurs victimes. Il est donc important d’être vigilant et de ne pas partager contacter d'inconnus sur ces applications.</div>
      <div style="margin-top: 12px; font-size: 0.9rem;">
        Source : <a href="https://www.sos-arnaque-webcam.com/blog/arnaque-chantage-hangout.html" 
        target="_blank" 
        style="color: #ffffff; text-decoration: underline; cursor: pointer;">Source</a>
      </div>
    `);
  }
}
