-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2022 a las 01:36:43
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `members_alameda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boss_family`
--

CREATE TABLE `boss_family` (
  `bossFamily_id` int(11) NOT NULL,
  `isBoss` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nameBoss` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastNameBoss` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `coupleAttachment` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `nameCouple` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastNameCouple` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `church_experiences`
--

CREATE TABLE `church_experiences` (
  `churchExperiences_id` int(11) NOT NULL,
  `nuevoInicio` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `bautismo` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `paso1` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `paso2` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `paso3` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `paso4` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `vida1` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `vida2` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `vida3` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `vida4` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `seaLibre` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fundamentos` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `celebremos` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sdl` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherExperiences` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nthingExperiences` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `phone` int(100) NOT NULL,
  `homePhone` int(100) DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enjoy_group`
--

CREATE TABLE `enjoy_group` (
  `enjoyGroup_id` int(11) NOT NULL,
  `compania` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `amistad` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `comida` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `oracion` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `biblia` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherEnjoyGroup` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `family`
--

CREATE TABLE `family` (
  `family_id` int(11) NOT NULL,
  `papa` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mama` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `tios` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `abuelos` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `conyuge` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `hijos` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `solo` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherFamily` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `isChildren` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `howManyChildren` int(10) DEFAULT NULL,
  `childrenAttachment` int(10) DEFAULT NULL,
  `bossFamily_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gronwup`
--

CREATE TABLE `gronwup` (
  `gronwUp_id` int(11) NOT NULL,
  `liveChurch` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `timeChurch` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `smallGroup_fk` int(11) NOT NULL,
  `voluntary_fk` int(11) NOT NULL,
  `servicesUsed_fk` int(11) NOT NULL,
  `churchExperiences_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `interest_area`
--

CREATE TABLE `interest_area` (
  `interestArea_id` int(11) NOT NULL,
  `relaciones` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `biblia` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `descubriProposito` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `servir` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `habitos` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `esparcimientos` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `diversion` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `comunion` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherInterest` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `profession` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastJob` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `artisticSkills` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `members`
--

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dateOfBirthday` datetime NOT NULL,
  `sex` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `relationalSituation` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `pathPhoto` varchar(550) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `job_fk` int(11) NOT NULL,
  `family_fk` int(11) NOT NULL,
  `residency_fk` int(11) NOT NULL,
  `socialMedia_fk` int(11) NOT NULL,
  `contact_fk` int(11) NOT NULL,
  `gronwUp_fk` int(11) NOT NULL,
  `interestArea_fk` int(11) NOT NULL,
  `needs_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `needs`
--

CREATE TABLE `needs` (
  `needs_id` int(11) NOT NULL,
  `salud` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `economia` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `familia` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `oracion` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `adicciones` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `equilibriEomocional` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `controlEomocional` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `soledad` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `crianza` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `matrimonail` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `laboral` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `legal` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sexual` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherNeeds` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `residency`
--

CREATE TABLE `residency` (
  `residency_id` int(11) NOT NULL,
  `country` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `number` int(10) NOT NULL,
  `secondLine` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `neighborhood` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `neighborhoodBlock` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `house` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `postalCode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services_used`
--

CREATE TABLE `services_used` (
  `servicesUsed_id` int(11) NOT NULL,
  `cafeteria` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `camping` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `instagram` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `escuelaMusica` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `escuelaDanza` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `casaMujer` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `jardin` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `acasa` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherService` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nthingService` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `small_group`
--

CREATE TABLE `small_group` (
  `smallGroup_id` int(11) NOT NULL,
  `nameGuide` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nameGroup` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `enjoyGroup_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socialmedia`
--

CREATE TABLE `socialmedia` (
  `socialMedia_id` int(11) NOT NULL,
  `youVersion` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `faceboock` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `instagram` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `youTube` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `tikTok` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `spotify` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `whatsApp` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telegram` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `twitter` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `twich` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `discord` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `pinterest` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `linkedIn` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `slack` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `otherSocial` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nthingSocial` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `voluntary`
--

CREATE TABLE `voluntary` (
  `voluntary_id` int(11) NOT NULL,
  `area1` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `area2` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `area3` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boss_family`
--
ALTER TABLE `boss_family`
  ADD PRIMARY KEY (`bossFamily_id`);

--
-- Indices de la tabla `church_experiences`
--
ALTER TABLE `church_experiences`
  ADD PRIMARY KEY (`churchExperiences_id`);

--
-- Indices de la tabla `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact _id`);

--
-- Indices de la tabla `enjoy_group`
--
ALTER TABLE `enjoy_group`
  ADD PRIMARY KEY (`enjoyGroup_id`);

--
-- Indices de la tabla `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`family_id`),
  ADD KEY `fk_bossFamily_family` (`bossFamily_fk`);

--
-- Indices de la tabla `gronwup`
--
ALTER TABLE `gronwup`
  ADD PRIMARY KEY (`gronwUp_id`),
  ADD KEY `fk_churchExperiences_gronwUp` (`churchExperiences_fk`),
  ADD KEY `fk_servesUsed_gronwUp` (`servicesUsed_fk`),
  ADD KEY `fk_voluntary_gronwUp` (`voluntary_fk`),
  ADD KEY `fk_smallGroup_gronwUp` (`smallGroup_fk`);

--
-- Indices de la tabla `interest_area`
--
ALTER TABLE `interest_area`
  ADD PRIMARY KEY (`interestArea_id`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- Indices de la tabla `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `fk_jobs_members` (`job_fk`),
  ADD KEY `fk_contact_members` (`contact_fk`),
  ADD KEY `fk_family_members` (`family_fk`),
  ADD KEY `fk_gronwUp_members` (`gronwUp_fk`),
  ADD KEY `fk_interestArea_members` (`interestArea_fk`),
  ADD KEY `fk_needs_members` (`needs_fk`),
  ADD KEY `fk_residency_members` (`residency_fk`),
  ADD KEY `fk_socialMedia_members` (`socialMedia_fk`);

--
-- Indices de la tabla `needs`
--
ALTER TABLE `needs`
  ADD PRIMARY KEY (`needs_id`);

--
-- Indices de la tabla `residency`
--
ALTER TABLE `residency`
  ADD PRIMARY KEY (`residency _id`);

--
-- Indices de la tabla `services_used`
--
ALTER TABLE `services_used`
  ADD PRIMARY KEY (`servicesUsed_id`);

--
-- Indices de la tabla `small_group`
--
ALTER TABLE `small_group`
  ADD PRIMARY KEY (`smallGroup_id`),
  ADD KEY `fk_ejoyGroup_smallGroup` (`enjoyGroup_fk`);

--
-- Indices de la tabla `socialmedia`
--
ALTER TABLE `socialmedia`
  ADD PRIMARY KEY (`socialMedia_id`);

--
-- Indices de la tabla `voluntary`
--
ALTER TABLE `voluntary`
  ADD PRIMARY KEY (`voluntary_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `boss_family`
--
ALTER TABLE `boss_family`
  MODIFY `bossFamily_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `church_experiences`
--
ALTER TABLE `church_experiences`
  MODIFY `churchExperiences_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contact`
--
ALTER TABLE `contact`
  MODIFY `contact _id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `enjoy_group`
--
ALTER TABLE `enjoy_group`
  MODIFY `enjoyGroup_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `family`
--
ALTER TABLE `family`
  MODIFY `family_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `gronwup`
--
ALTER TABLE `gronwup`
  MODIFY `gronwUp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `interest_area`
--
ALTER TABLE `interest_area`
  MODIFY `interestArea_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `needs`
--
ALTER TABLE `needs`
  MODIFY `needs_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `residency`
--
ALTER TABLE `residency`
  MODIFY `residency _id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `services_used`
--
ALTER TABLE `services_used`
  MODIFY `servicesUsed_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `small_group`
--
ALTER TABLE `small_group`
  MODIFY `smallGroup_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `socialmedia`
--
ALTER TABLE `socialmedia`
  MODIFY `socialMedia_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `voluntary`
--
ALTER TABLE `voluntary`
  MODIFY `voluntary_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `family`
--
ALTER TABLE `family`
  ADD CONSTRAINT `fk_bossFamily_family` FOREIGN KEY (`bossFamily_fk`) REFERENCES `boss_family` (`bossFamily_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `gronwup`
--
ALTER TABLE `gronwup`
  ADD CONSTRAINT `fk_churchExperiences_gronwUp` FOREIGN KEY (`churchExperiences_fk`) REFERENCES `church_experiences` (`churchExperiences_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_servesUsed_gronwUp` FOREIGN KEY (`servicesUsed_fk`) REFERENCES `services_used` (`servicesUsed_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_smallGroup_gronwUp` FOREIGN KEY (`smallGroup_fk`) REFERENCES `small_group` (`smallGroup_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_voluntary_gronwUp` FOREIGN KEY (`voluntary_fk`) REFERENCES `voluntary` (`voluntary_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `fk_contact_members` FOREIGN KEY (`contact_fk`) REFERENCES `contact` (`contact _id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_family_members` FOREIGN KEY (`family_fk`) REFERENCES `family` (`family_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_gronwUp_members` FOREIGN KEY (`gronwUp_fk`) REFERENCES `gronwup` (`gronwUp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_interestArea_members` FOREIGN KEY (`interestArea_fk`) REFERENCES `interest_area` (`interestArea_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_jobs_members` FOREIGN KEY (`job_fk`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_needs_members` FOREIGN KEY (`needs_fk`) REFERENCES `needs` (`needs_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_residency_members` FOREIGN KEY (`residency_fk`) REFERENCES `residency` (`residency _id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_socialMedia_members` FOREIGN KEY (`socialMedia_fk`) REFERENCES `socialmedia` (`socialMedia_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `small_group`
--
ALTER TABLE `small_group`
  ADD CONSTRAINT `fk_ejoyGroup_smallGroup` FOREIGN KEY (`enjoyGroup_fk`) REFERENCES `enjoy_group` (`enjoyGroup_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
