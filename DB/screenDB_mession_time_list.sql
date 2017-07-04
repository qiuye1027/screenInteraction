-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: screenDB
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mession_time_list`
--

DROP TABLE IF EXISTS `mession_time_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mession_time_list` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `mession_id` varchar(255) NOT NULL COMMENT '任务id',
  `password` varchar(32) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `execute_start_time` datetime DEFAULT NULL COMMENT '开始执行时间\n\n',
  `execute_end_time` datetime DEFAULT NULL COMMENT '结束执行时间',
  `program_id` varchar(255) DEFAULT NULL COMMENT '节目id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='任务执行时间表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mession_time_list`
--

LOCK TABLES `mession_time_list` WRITE;
/*!40000 ALTER TABLE `mession_time_list` DISABLE KEYS */;
INSERT INTO `mession_time_list` VALUES (1,'1',NULL,'2017-07-04 15:22:25','2019-09-09 00:00:00','2011-09-09 00:00:00',NULL),(2,'[object Object]',NULL,'2017-07-04 15:25:45','2017-07-06 07:00:00','2017-07-06 11:11:00',NULL),(3,'2',NULL,'2017-07-04 15:32:48','2017-07-06 07:00:00','2017-07-06 11:11:00',NULL),(4,'3',NULL,'2017-07-04 15:34:45','2017-07-07 08:30:00','2017-07-07 11:11:00',NULL);
/*!40000 ALTER TABLE `mession_time_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-04 23:39:48
