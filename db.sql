CREATE TABLE `players` (
  `id` int(50) UNSIGNED NOT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(5) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `province` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(24) COLLATE utf8_unicode_ci NOT NULL)
  ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `players` (`id`,`name`, `age`, `city`, `province`, `country`) VALUES
(1, 'Pratik Panchani', 21, 'Toronto' ,'Ontario', 'Canada'),
(2, 'Sam Kennedy', 22, 'Halifax' ,'Nova Scotia', 'Canada'),
(3, 'Mine Maccormick', 43, 'Edmonton' ,'Alberta', 'Canada'),
(4, 'Mathew Ahn', 20, 'Red Deer' ,'Alberta', 'Canada');

ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `players`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;
