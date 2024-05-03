console.log('Ready');

// fetch data from data.json file and display it in the browser
fetch('customer-news.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = "col-12 col-lg-4 col-md-12 col-sm-12  p-3 m-3";
            div.innerHTML = `<h2 class="bg-primary rounded ps-3 p-2">${item.name}</h2>`;

            const createButtonRow = (url, text, isImage = false) => {
                const row = document.createElement('div');
                row.className = "row justify-content-center mx-1";
                row.innerHTML = isImage
                    ? `<a href=${url} class="btn btn-outline-light m-2 text-light" target="_blank"><img src="./images/linkedIn-icon-18x18.png"/> ${text}</a>`
                    : `<a href=${url} class="btn btn-outline-light m-2 text-light" target="_blank">${text}</a>`;
                return row;
            };

            div.appendChild(createButtonRow(item.mainWebsiteURL, 'Website'));
            div.appendChild(createButtonRow(item.ownNewsURL, 'News'));

            if (item.portalURL) {
                const text = item.portalName || 'Portal';
                div.appendChild(createButtonRow(item.portalURL, text));
            }

            if (item.dealLink) {
                div.appendChild(createButtonRow(item.dealLink, 'Deal'));
            }

            if (item.linkedinURLParent) {
                div.appendChild(createButtonRow(item.linkedinURLParent, 'LinkedIn', true));
            }

            document.getElementById('data').appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));