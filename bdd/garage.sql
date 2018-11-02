-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 01 nov. 2018 à 09:34
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Garage`
--

-- --------------------------------------------------------

--
-- Structure de la table `Garage`
--

DROP TABLE IF EXISTS `Garage`;
CREATE TABLE IF NOT EXISTS `Garage` (
  `idGarage` int(11) NOT NULL AUTO_INCREMENT,
  `nomGarage` varchar(50) NOT NULL,
  `cpGarage` int(10) NOT NULL,
  `villeGarage` varchar(50) NOT NULL,
  `adresseGarage` varchar(50) NOT NULL,
  `telGarage` int(10) DEFAULT NULL,
  `mailGarage` varchar(50) DEFAULT NULL,
  `nbVoitureMax` int(11) NOT NULL,
  PRIMARY KEY (`idGarage`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Garage`
--

INSERT INTO `Garage` (`idGarage`, `nomGarage`, `cpGarage`, `villeGarage`, `adresseGarage`, `telGarage`, `mailGarage`, `nbVoitureMax`) VALUES
(1, 'Garage de la Gare', 51100, 'Reims', '1 rue de la gare', 326262626, 'contact@GaragedelaGare.fr', 30),
(2, 'Top occasion', 51100, 'Reims', 'ZAC Croix Blandin, 1 Rue Lena Bernstein', NULL, NULL, 20);

-- --------------------------------------------------------

--
-- Structure de la table `Marque`
--

DROP TABLE IF EXISTS `Marque`;
CREATE TABLE IF NOT EXISTS `Marque` (
  `idMarque` int(11) NOT NULL AUTO_INCREMENT,
  `nomMarque` varchar(50) NOT NULL,
  PRIMARY KEY (`idMarque`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Marque`
--

INSERT INTO `Marque` (`idMarque`, `nomMarque`) VALUES
(1, 'Opel'),
(2, 'Renault'),
(3, 'Peugeot'),
(4, 'Citroen'),
(6, 'Kia');

-- --------------------------------------------------------

--
-- Structure de la table `Voiture`
--

DROP TABLE IF EXISTS `Voiture`;
CREATE TABLE IF NOT EXISTS `Voiture` (
  `idVoiture` int(11) NOT NULL AUTO_INCREMENT,
  `idGarage` int(11) DEFAULT NULL,
  `idMarque` int(11) NOT NULL,
  `couleur` varchar(50) NOT NULL,
  `plaque` varchar(7) NOT NULL,
  `model` varchar(50) NOT NULL,
  `dateImmat` date NOT NULL,
  `km` int(11) NOT NULL,
  `prix` int(11) NOT NULL,
  PRIMARY KEY (`idVoiture`),
  KEY `fk_foreign_key_garage` (`idGarage`),
  KEY `fk_foreign_key_marque` (`idMarque`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Voiture`
--

INSERT INTO `Voiture` (`idVoiture`, `idGarage`, `idMarque`, `couleur`, `plaque`, `model`, `dateImmat`, `km`, `prix`) VALUES
(1, 1, 1, 'Rouge', 'AB123CD', 'Astra', '2017-07-12', 25000, 20000),
(2, 1, 3, 'Blanc', 'AC124DE', '208', '2017-10-27', 18000, 15000),
(3, 1, 3, 'Bleu', 'RE598GT', '508', '2018-10-30', 0, 35000),
(4, 1, 2, 'Vert', 'UI896HU', 'Clio', '2016-11-20', 60000, 10000),
(5, 2, 4, 'Noir', 'DR458HZ', 'C1', '2015-05-02', 80000, 8000),
(6, 2, 4, 'Orange', 'BK565KI', 'C5', '2008-10-30', 150000, 5000),
(7, 2, 2, 'Noir', 'FG454TY', 'Megane', '2018-06-25', 30000, 17000),
(8, NULL, 6, 'Rouge', 'DR458HG', 'Sportage', '2018-10-30', 1000, 13000);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Voiture`
--
ALTER TABLE `Voiture`
  ADD CONSTRAINT `fk_foreign_key_garage` FOREIGN KEY (`idGarage`) REFERENCES `Garage` (`idGarage`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_foreign_key_marque` FOREIGN KEY (`idMarque`) REFERENCES `Marque` (`idMarque`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
