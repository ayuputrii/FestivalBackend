-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2021 at 02:47 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `festivaldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `photographer` varchar(80) NOT NULL,
  `category` varchar(80) NOT NULL,
  `photo` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `title`, `description`, `date`, `photographer`, `category`, `photo`) VALUES
(1, '', '', '2021-01-02 12:41:54', '', '', '1609581956372-2.jpg'),
(2, '', '', '2021-01-02 12:42:04', '', '', '1609582039395-2.jpg'),
(3, '', '', '2021-01-02 12:42:21', '', '', '1609583699386-2.jpg'),
(4, '', '', '2021-01-02 12:42:22', '', '', '1609583708447-2.jpg'),
(5, '', '', '2021-01-02 12:42:24', '', '', '1609584261325-2.jpg'),
(6, '', '', '2021-01-02 12:43:10', '', '', ''),
(7, '', '', '2021-01-02 12:43:31', '', '', ''),
(8, '', '', '2021-01-02 12:43:31', '', '', ''),
(9, '', '', '2021-01-02 12:43:48', '', '', ''),
(10, '', '', '2021-01-02 12:44:10', '', '', ''),
(11, '', '', '2021-01-02 12:44:42', '', '', ''),
(12, '', '', '2021-01-02 12:45:52', '', '', ''),
(13, '', '', '2021-01-02 12:48:02', '', '', ''),
(14, '', '', '2021-01-02 13:35:11', '', '', ''),
(15, 'kamu', 'apa ya', '2021-01-02 14:39:54', 'siii', 'asas', ''),
(16, '', '', '2021-01-02 14:41:06', '', '', ''),
(17, 'Zalora', '', '2021-01-02 15:49:55', '', 'foto', '1609584418051-2.jpg'),
(18, 'Apa', 'Bacaan', '2021-01-02 15:53:38', 'kamu', 'foto', '1609584924897-Cara-Install-Linux-Ubuntu.jpg'),
(19, 'Apa', 'Bacaan', '2021-01-02 17:09:23', 'kamu', 'foto', '1609584944539-Cara-Install-Linux-Ubuntu.jpg'),
(21, 'Apa', 'Bacaan', '2021-01-02 17:15:05', 'kamu', 'foto', '1609586844827-2.jpg'),
(22, 'Apa', 'Bacaan', '2021-01-02 17:16:29', 'kamu', 'foto', '/images/1609582589775-photo.png'),
(23, 'Apa', 'Bacaan', '2021-01-02 17:17:08', 'kamu', 'foto', '/images/1609582628152-photo');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 5,
  `username` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `role`, `username`, `email`, `password`) VALUES
(1, 6, 'ayuarmadani', 'ayuputri12378@gmail.com', '$2b$10$IBdi/r4nZAse3RR.91NFneSg9VEmX.6QqxlMWXkxeZP8aGRAPY0Am'),
(2, 5, 'sausannabila_', 'sausanabilaaaa@gmail.com', '$2b$10$6wJfjbMwIm1SAaaUAINxvOu08NMiXUBAOIIbMk1T8UxjcK2Xb5Rzu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
