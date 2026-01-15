function loadcomponent(id, file) {
    fetch(file)
        .then(response => {
            if (response.ok) return response.text();
            throw new Error("Could not load component " + file);
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

loadcomponent('header-placeholder', 'header.html')