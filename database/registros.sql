USE winkdb;

-- Inicializamos los grados
INSERT INTO GRADOS VALUES(NULL,'INGENIERIA'); -- 1
INSERT INTO GRADOS VALUES(NULL,'LICENCIATURA'); -- 2
INSERT INTO GRADOS VALUES(NULL,'TÉCNICO UNIVERSITARIO'); -- 3

-- Se registran las carreras
INSERT INTO CARRERAS VALUES(NULL,'DISEÑO GRÁFICO',2);
INSERT INTO CARRERAS VALUES(NULL,'ADMON DE EMPRESAS',2);
INSERT INTO CARRERAS VALUES(NULL,'PSICOLOGÍA',2);
INSERT INTO CARRERAS VALUES(NULL,'MERCADOTECNIA',2);

INSERT INTO CARRERAS VALUES(NULL,'ELECTRÓNICA',1);
INSERT INTO CARRERAS VALUES(NULL,'INFORMÁTICA',1);
INSERT INTO CARRERAS VALUES(NULL,'GESTIÓN LOSGÍSTICA',1);

INSERT INTO CARRERAS VALUES(NULL,'DISEÑO Y DESARROLLO WEB',3);
INSERT INTO CARRERAS VALUES(NULL,'INSTALACIÓN DE REDES',3);
INSERT INTO CARRERAS VALUES(NULL,'BILINGUE EN CALL CENTER',3);
INSERT INTO CARRERAS VALUES(NULL,'DIBUJO DE OBRAS CIVILES Y CONSTRUCCIÓN',3);

SELECT * FROM CARRERAS;

-- SELECT C.nombreCarrera, G.grado FROM CARRERAS C, GRADOS G  WHERE C.idGrado = 3;
desc CLASES;

select eventos.nombre, instituciones.nombre 
FROM instituciones
JOIN evento_institucion ON evento_institucion.institucion_id = instituciones.id
JOIN eventos ON eventos.id = evento_institucion.evento_id
where eventos.id = 1
UNION
select inscripciones.codigo, eventos.nombre from inscripciones
JOIN eventos ON inscripciones.evento_id = eventos.id
where inscripciones.id = 1;

-- se registran las clases de TUDDW
INSERT INTO CLASES VALUES(NULL,'Desarrollo de Aplicaciones Web II','DW5548',60,4,'#a3d285');
INSERT INTO CLASES VALUES(NULL,'Seguridad Computacional','CCCT200',60,4,'#fde28a');
INSERT INTO CLASES VALUES(NULL,'Administración de Proyectos','CCCT200',60,4,'#fdbed8');
INSERT INTO CLASES VALUES(NULL,'Herramientas de Diseño Web','DW5544',45,3,'#fde28a');
-- se registran las clases de Diseño Grafico
-- tabla temporal 
CREATE TABLE users(
	id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    correo VARCHAR(20) NOT NULL,
    cuenta VARCHAR(15) NOT NULL,
    carrera VARCHAR(30) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

select CL.nombreClase , CA.nombreCarrera FROM CLASES CL , CARRERAS CA WHERE CA.idGrado = 3;

select * from CARRERAS;
SELECT * FROM users WHERE correo = 'jorge@gmail.com';



SELECT
    CL.nombreClase, CA.nombreCarrera
FROM CARRERAS CA
JOIN CARRERA_CLASE CC ON CC.idCarrera = CA.id
JOIN CLASES CL ON CL.id = CC.idClase
WHERE CA.idGrado = 3;
	