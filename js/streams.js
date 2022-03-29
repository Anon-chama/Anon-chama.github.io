const contenedor = document.querySelector('.contenedor-streams');

const channels = JSON.parse(
'[{"name":"Hina Misora", "url": "UC6tSB9TnO0f01OBeo9UEJZA"},' +
'{"name":"Luna Rurine", "url": "UCN3mosAMYBdogyQovOhPrxA"},' +
'{"name":"Himea D\'Almaria", "url": "UCvm34tgJ0ZaKzTinWVyXpcA"},' +
'{"name":"Ito Shinonome", "url": "UCVtuciDzkjxCP_O7r-0QhXQ"},' +
'{"name":"Miu Hizuki", "url": "UCM6iy_rSgSMbFjx10Z6VVGA"},' +
'{"name":"Pal Sumeragi", "url": "UCQdqGzhc5Ey_5nh_bOowAhg"},' +
'{"name":"Lia Mitsurugi", "url": "UCJePO0Zl-zZTqjpHO82RNNA"},' +
'{"name":"Himari Inumaki", "url": "UCAx0YWXJgyvXx5oDvrDaN_A"},' +
'{"name":"Yue Saohime", "url": "UCIm8pnnTNhCgGAtNxrQQv-g"} ]'
);



contenedor.innerHTML = '';

channels.forEach(element => {
    const livevideo = `https://www.youtube.com/embed/live_stream?channel=${element.url}`;
    const div = document.createElement("div");
    div.classList.add('stream-body');
    div.innerHTML = 
    `<header class="stream-header">
        <p>${element.name}</p>
    </header>
    <iframe src = '${livevideo}'></iframe>`
    contenedor.appendChild(div);
});

/*            <div class="primero stream">
                <p class="fecha-stream">22/marzo/2022</p>
                <header class="stream-header">
                    <p>【Charla Libre】Tempranitoo♡【Himea D'Almaria/WACTOR】</p>
                </header>
                <div class="stream-body">
                    <img src="https://img.youtube.com/vi/40XBcJKXcPE/0.jpg" alt="">
                </div>
                <footer class="stream-footer">
                    <a href="https://www.youtube.com/watch?v=40XBcJKXcPE">¡Vamos!</a>
                </footer>
            </div>
            */

            //<iframe src = '${livevideo}'></iframe>