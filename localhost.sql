-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 02-02-2016 a las 17:07:17
-- Versión del servidor: 5.5.42-37.1-log
-- Versión de PHP: 5.4.23

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `gricelse_barry`
--
CREATE DATABASE `gricelse_barry` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gricelse_barry`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Menu`
--

DROP TABLE IF EXISTS `Menu`;
CREATE TABLE IF NOT EXISTS `Menu` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `alias` varchar(100) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `visible` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `Menu`
--

INSERT INTO `Menu` (`id`, `nombre`, `alias`, `titulo`, `visible`) VALUES
(1, 'banner', 'slider', 'slider', 1),
(2, 'nosotros', 'nosotros', 'Este texto dice describe quienes somos', 1),
(4, 'experiencia', 'confiado', 'titulo de ventas y arriendos', 1),
(5, 'contactos', 'contactos', 'formulario de contacto', 1),
(6, 'footer', 'footer', 'footer', 1),
(7, 'catalogo', 'vercatalogo', 'catalogo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'autos'),
(2, 'grua'),
(3, 'motos'),
(4, 'zxczxc'),
(5, 'prueba'),
(6, 'gricel'),
(7, 'gricel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `confiado`
--

DROP TABLE IF EXISTS `confiado`;
CREATE TABLE IF NOT EXISTS `confiado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tab` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `confiado`
--

INSERT INTO `confiado` (`id`, `tab`, `nombre`, `link`, `imagen`) VALUES
(1, 1, 'Nombre de marca 1', 'http://www.google.cl', '1454300477'),
(2, 2, 'Nombre de marca 2', 'http://www.google.cl', '1454300462'),
(3, 3, 'Nombre de marca 3', 'http://www.google.cl', '1454300503'),
(4, 4, 'Nombre de marca 4', 'http://www.google.cl', '1454300529'),
(5, 5, 'Nombre de marca 5', 'http://www.google.cl', '1454300552'),
(6, 6, 'Nombre de marca 6', 'http://www.google.cl', '1454300574'),
(7, 7, 'Nombre de marca 7', 'http://www.google.cl', '1454300596'),
(8, 8, 'Nombre de marca 8', 'http://www.google.cl', '1454300613');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `email`) VALUES
(1, 'juan_out');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

DROP TABLE IF EXISTS `experiencia`;
CREATE TABLE IF NOT EXISTS `experiencia` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `tab` int(5) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `link` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `imagen` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id`, `tab`, `titulo`, `link`, `descripcion`, `imagen`) VALUES
(1, 1, 'Titulo de ejemplo', 'http://www.google.cl', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1454300105'),
(2, 2, 'Titulo de ejemplo', 'http://www.google.cl', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1454300222'),
(3, 3, 'Titulo de ejemplo', 'http://www.google.cl', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1454300258'),
(4, 4, 'juan_out', 'juan_out', 'juan_out', '1452805960');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `footer`
--

DROP TABLE IF EXISTS `footer`;
CREATE TABLE IF NOT EXISTS `footer` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `calle` varchar(50) NOT NULL,
  `Comuna` varchar(50) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `celular` int(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `footer`
--

INSERT INTO `footer` (`id`, `calle`, `Comuna`, `numero`, `telefono`, `celular`, `email`) VALUES
(1, 'Doctor Sierra', 'Quinta Normal', '#3860', '(56-2) 2 733 03 62', 0, 'contacto@barry.cl');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
CREATE TABLE IF NOT EXISTS `imagenes` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `codproducto` int(100) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `tab` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=45 ;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `codproducto`, `nombre`, `tab`) VALUES
(25, 1453181388, '1454363707', 1),
(26, 1453181388, '1453192816', 2),
(27, 1453181388, '1453192822', 3),
(28, 1453181388, '1453192838', 4),
(29, 1453181408, '1454357275', 1),
(30, 1453181408, 'imagen', 2),
(31, 1453181408, 'imagen', 3),
(32, 1453181408, 'imagen', 4),
(33, 1453183858, 'imagen', 1),
(34, 1453183858, 'imagen', 2),
(35, 1453183858, 'imagen', 3),
(36, 1453183858, 'imagen', 4),
(37, 1453194244, 'imagen', 1),
(38, 1453194244, 'imagen', 2),
(39, 1453194244, 'imagen', 3),
(40, 1453194244, 'imagen', 4),
(41, 1453194463, 'imagen', 1),
(42, 1453194463, 'imagen', 2),
(43, 1453194463, 'imagen', 3),
(44, 1453194463, 'imagen', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nosotros`
--

DROP TABLE IF EXISTS `nosotros`;
CREATE TABLE IF NOT EXISTS `nosotros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `texto1` varchar(500) NOT NULL,
  `texto2` varchar(500) NOT NULL,
  `texto3` varchar(500) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `nosotros`
--

INSERT INTO `nosotros` (`id`, `titulo`, `texto1`, `texto2`, `texto3`, `imagen`) VALUES
(1, 'Nuestra empresa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '1454300012');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofrece`
--

DROP TABLE IF EXISTS `ofrece`;
CREATE TABLE IF NOT EXISTS `ofrece` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tab` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `ofrece`
--

INSERT INTO `ofrece` (`id`, `tab`, `titulo`, `descripcion`, `imagen`) VALUES
(1, 1, 'Equipo de Izaje', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', '1454300830'),
(2, 2, 'Grua orquilla', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', '1454300902'),
(3, 3, 'Camiones cama baja', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', '1454300866');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` int(100) DEFAULT NULL,
  `imagenes` int(100) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `descripcion1` varchar(250) NOT NULL,
  `descripcion2` varchar(250) NOT NULL,
  `enlace` varchar(100) NOT NULL,
  `precio` int(100) NOT NULL,
  `estado` varchar(100) DEFAULT NULL,
  `destacado` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `categoria`, `imagenes`, `nombre`, `descripcion1`, `descripcion2`, `enlace`, `precio`, `estado`, `destacado`) VALUES
(7, 2, 1453181388, 'juan', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo', 'Lorem ipsum \ndolor sit amet, consectetur \nadipisicing elit, sed do eiusmod\ntempor incididunt ut\n labore et dolore magna aliqua. Ut enim ad minim veniam,\n', 'asd', 556, 'Arriendo', 'destacado'),
(8, 3, 1453181408, 'qwe', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,', 'asdqwe', 'asdqwe', 8755, 'Arriendo', 'destacado'),
(9, 5, 1453183858, 'qwe', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,', 'asd', 'asd', 8766, 'Venta', 'null'),
(10, 4, 1453194244, 'asdasd', 'asdasd', 'sadasd', 'sadsad', 0, 'Venta', 'destacado'),
(11, 5, 1453194463, 'juan', 'asd', 'asd', 'asd', 0, 'Venta', 'destacado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slider`
--

DROP TABLE IF EXISTS `slider`;
CREATE TABLE IF NOT EXISTS `slider` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `tab` int(10) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `link` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `slider`
--

INSERT INTO `slider` (`id`, `tab`, `titulo`, `descripcion`, `link`, `imagen`) VALUES
(1, 1, 'Titulo de ejemplo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://www.google.cl', '1454299692'),
(2, 2, 'Titulo de ejemplo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'http://www.google.cl', '1454299753'),
(3, 3, 'asdc', 'xzcxcc', 'asd', 'blastoise.jpg'),
(4, 4, 'asd', 'asd', 'asd', 'charizard.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `perfil` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `user`, `pass`, `email`, `perfil`) VALUES
(1, 'sindarel', 'sindarel', 'sindarel@gmail.com', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
