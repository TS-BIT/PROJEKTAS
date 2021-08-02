import { Server } from "net";

let server = new Server((socket) => {
    console.log("kazkas prisijunge");
    console.log(
        socket.localAddress,
        socket.localPort,
        socket.remoteAddress,
        socket.remotePort,
    );
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", (data) => {
        allData += data;
        let lines = allData.split("\r\n");
        if (lines.findIndex(e => e === "") !== -1) {
            console.log(allData);
            console.log("-----------");
            let resp = "HTTP/1.1 200 Ok\r\n\r\n";
            let html = "<html><body><h1>labas pasauli !!!</h1></body></html>";
            console.log(resp + html + "\r\n\r\n");
            console.log("=============");
            socket.write(resp + html + "\r\n\r\n", () => {
                socket.end();
            });
        }
    });
});


server.listen(3000);






























/*
let server = new Server({
    allowHalfOpen: true,
    }, (socket) => {
    console.log("kazkas prisijunge");
    console.log(
    socket.localAddress,
    socket.localPort,
    socket.remoteAddress,
    socket.remotePort,
);

socket.setEncoding("utf-8");
let allData = "";
socket.on("data", (data) => {
    allData += data;
    let lines = allData.split("\r\n");
    if (lines.length > 1) {
        console.log(allData);
        console.log("-----------");
        let resp = "HTTP/1.1 200 Ok\r\n\r\n";
        let html = "<html><body><h1>Hello World !!!</h1></body></html>";
        console.log(resp + html + "\r\n\r\n");
        console.log("=============");
        socket.write(resp + html + "\r\n\r\n", () => {
            socket.end();
        });
    }
});
});
server.listen(3000);
*/





/*
let server = new Server(socket => {
    console.log("kazkas prisijunge");
    console.log(socket.localAddress, socket.localPort, socket.remoteAddress, socket.localPort);
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", data => {
        allData += data;
    });
    socket.on("end", () => {
        console.log(allData);
        console.log("-----------");
        let resp = "HTTP/1.1. 200 Ok\r\n\r\n";
        let html = "<html><body><h1>Hello World !!!</h1><body ";
        console.log(resp + html + "\r\n\r\n");
        console.log("=============");
        socket.write( resp + html + (err) => {
            console.log(err);
            socket.end("\r\n\r\n");
        });
    });
});


*/