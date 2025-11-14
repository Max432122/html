package com.example.FetchCompleto;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HolaController {
    @PostMapping(

            path = "/saludo",

            consumes = MediaType.APPLICATION_JSON_VALUE,

            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String, String> saludo(@RequestBody Map<String, String> datos) {
        String nombre = datos.get("nombre");

        String apellidoP = datos.get("apellidop");

        String apellidoM = datos.get("apellidoM");

        String correo = datos.get("correo");

        String genero = datos.get("genero");

        String telefono = datos.get("telefono");

        String contrasena = datos.get("contrasena");

        String mensaje = "Hola " + nombre + " " + apellidoP + " " + apellidoM +
                ", correo: " + correo +
                ", género: " + genero +
                ", teléfono: " + telefono +
                ", contraseña: " + contrasena +
                ", bienvenido a Spring y top tops";

        return Map.of("mensaje",mensaje);

    }

}