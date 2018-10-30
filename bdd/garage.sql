-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost
-- Généré le :  Mar 30 Octobre 2018 à 11:51
-- Version du serveur :  10.1.23-MariaDB-9+deb9u1
-- Version de PHP :  7.0.30-0+deb9u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `garage`
--

-- --------------------------------------------------------

--
-- Structure de la table `Garage`
--

CREATE TABLE `Garage` (
  `idGarage` int(11) NOT NULL,
  `nomGarage` varchar(50) NOT NULL,
  `cpGarage` int(10) NOT NULL,
  `villeGarage` varchar(50) NOT NULL,
  `adresseGarage` varchar(50) NOT NULL,
  `telGarage` int(10) DEFAULT NULL,
  `mailGarage` varchar(50) DEFAULT NULL,
  `nbVoiteMax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Marque`
--

CREATE TABLE `Marque` (
  `idMArque` int(11) NOT NULL,
  `nomMarque` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Voiture`
--

CREATE TABLE `Voiture` (
  `idVoiture` int(11) NOT NULL,
  `idGarage` int(11) NOT NULL,
  `idMarque` int(11) NOT NULL,
  `couleur` int(11) NOT NULL,
  `plaque` varchar(7) NOT NULL,
  `model` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Garage`
--
ALTER TABLE `Garage`
  ADD PRIMARY KEY (`idGarage`);

--
-- Index pour la table `Marque`
--
ALTER TABLE `Marque`
  ADD PRIMARY KEY (`idMArque`);

--
-- Index pour la table `Voiture`
--
ALTER TABLE `Voiture`
  ADD PRIMARY KEY (`idVoiture`),
  ADD KEY `fk_foreign_key_garage` (`idGarage`),
  ADD KEY `fk_foreign_key_marque` (`idMarque`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Garage`
--
ALTER TABLE `Garage`
  MODIFY `idGarage` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Marque`
--
ALTER TABLE `Marque`
  MODIFY `idMArque` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Voiture`
--
ALTER TABLE `Voiture`
  MODIFY `idVoiture` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Voiture`
--
ALTER TABLE `Voiture`
  ADD CONSTRAINT `fk_foreign_key_garage` FOREIGN KEY (`idGarage`) REFERENCES `Garage` (`idGarage`),
  ADD CONSTRAINT `fk_foreign_key_marque` FOREIGN KEY (`idMarque`) REFERENCES `Marque` (`idMArque`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
