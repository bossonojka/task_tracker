-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: task_tracker
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(64) NOT NULL,
  `reg_date_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Joe','Dou','joe@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 18:23:52'),(8,'Sara','Goodwin','sara@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 18:25:10'),(12,'Alex','Jones','alex@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 18:35:20'),(13,'Nik','Birdson','nik@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 18:35:20'),(14,'Ivan','Ivan','ivan@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:10:59'),(15,'Anton','Anton','anton@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:11:16'),(16,'Igor','Igor','igor@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:11:34'),(17,'Anna','Anna','anna@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:11:59'),(18,'Nastya','Nastya','nastya@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:12:17'),(19,'Stas','Stas','stas@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:12:34'),(20,'Vova','Vova','vova@gmail.com','$2b$10$gmS7YvEyRAgBpOLzRUtuZO5N4PtX.O23K7FY8zIfzkYX1tW6NPIgi','2020-07-03 19:12:52'),(22,'Test first name','Test last name','test12@gmail.com','$2b$10$5.n0qKKxCncvOO1j.PKZj..y2G3sX0kHZGOIC6Sl2okAchfJDLv8q','2020-07-03 19:23:11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-03 20:05:00
