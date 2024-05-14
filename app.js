const img = React.createElement(
    "img",
    {
        id:"image",
        style:{
            width:"300px",
            height:"300px"
        },
        alt : "Beautiful Image",
        src:"https://th.bing.com/th/id/R.8cf22a569c662c5b5c2dec252a558651?rik=0mK%2fSn9RQgOsEA&riu=http%3a%2f%2fdata.freehdw.com%2fgolden-sunset-on-the-green-field.jpg&ehk=MbefBTWgbtPmFFNvnak94E9C6UKTwiDnPenpIbjrX6A%3d&risl=&pid=ImgRaw&r=0"
    },
    null
);

const heading = React.createElement(
    "h1",
    {
        id:"heading"
    },
    "Heading"
);

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [img, heading]
);

ReactDOM.render(container, document.querySelector(".root"));