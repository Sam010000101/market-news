console.log('Ready');

// fetch data from data.json file and display it in the browser
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = "col-12 col-sm-4 border rounded p-3 m-3";
            div.innerHTML = `<h2>${item.name}</h2><br>`;
            
            const container = document.createElement('div');
            container.className = "px-3 mx-3 mb-3"; 
            container.innerHTML = `<a href=${item.mainWebsiteURL} class="text-light" target="_blank">Website</a> <br> <a href=${item.ownNewsURL} class="text-light" target="_blank">News</a>`;

            if(item.portalURL && item.portalName) {
                container.innerHTML += `<br><a href=${item.portalURL} class="text-light" target="_blank">Portal:</a> <a href=${item.portalURL} class="text-light" target="_blank">${item.portalName}</a>`;
           } else if(item.portalURL && item.portalName === null) {
                container.innerHTML += `<br><a href=${item.portalURL} class="text-light" target="_blank">Portal</a>`;
            }

            if(item.dealLink) {
                container.innerHTML += `<br><a href=${item.dealLink} class="text-light" target="_blank">Deal</a>`;
            }

            if(item.linkedinURLParent) {
                container.innerHTML += `<br><img src="./images/linkedIn-icon-18x18.png"/> <a href=${item.linkedinURLParent} class="text-light" target="_blank">LinkedIn</a>`;
            }
            
            div.appendChild(container);
            document.getElementById('data').appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));