console.log('Ready');

// fetch data from data.json file and display it in the browser
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = "col-12 col-lg-4 col-md-6 col-sm-6 border border-2 rounded p-3 m-3";
            div.innerHTML = `<h2>${item.name}</h2><hr>`;
            
            const container = document.createElement('div');
            container.className = "px-3 mx-3 mb-3"; 
            container.innerHTML = `<a href=${item.mainWebsiteURL} class="btn btn-outline-light m-2 text-light" target="_blank">Website</a> <br> <a href=${item.ownNewsURL} class="btn btn-outline-light m-2 text-light" target="_blank">News</a>`;

            if(item.portalURL && item.portalName === null) {
                container.innerHTML += `<br><a href=${item.portalName} class="btn btn-outline-light m-2 text-light" target="_blank">Portal</a>`;
                
           } else if(item.portalURL && item.portalName !== null) {
            container.innerHTML += `<br><a href=${item.portalURL} class="btn btn-outline-light m-2 text-light" target="_blank">${item.portalName}</a>`;
            }

            if(item.dealLink) {
                container.innerHTML += `<br><a href=${item.dealLink} class="btn btn-outline-light m-2 text-light" target="_blank">Deal</a>`;
            }

            if(item.linkedinURLParent) {
                container.innerHTML += `<br><a href=${item.linkedinURLParent} class="btn btn-outline-light m-2 text-light" target="_blank"><img src="./images/linkedIn-icon-18x18.png"/> LinkedIn</a>`;
            }
            
            div.appendChild(container);
            document.getElementById('data').appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));