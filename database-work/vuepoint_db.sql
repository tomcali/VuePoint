BEGIN TRANSACTION;
CREATE TABLE `user` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`email`	TEXT NOT NULL,
	`password`	TEXT
);
CREATE TABLE "book" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`title`	TEXT NOT NULL,
	`version`	TEXT NOT NULL,
	`description`	TEXT NOT NULL,
	`pagecnt`	INTEGER,
	`ISBN10`	INTEGER,
	`ISBN13`	INTEGER,
	`price`	INTEGER NOT NULL,
	`coverart`	TEXT,
	`aboutcover`	TEXT,
	`outofprint`	TEXT,
	`role`	TEXT NOT NULL,
	`author_editor1`	TEXT NOT NULL,
	`author_editor2`	TEXT,
	`author_editor3`	TEXT,
	`author_editor4`	TEXT,
	`author_editor5`	TEXT,
	`author_editor6`	TEXT,
	`artist1`	TEXT,
	`artist2`	TEXT,
	`artist3`	TEXT,
	`artist4`	TEXT
);
INSERT INTO `book` VALUES (1,'Without a Tout: How to Pick a Winning Team','Print','Without a Tout is a practical, no-nonsense guide to building models for team sports. Making predictive models accessible to the nontechnical reader, the book describes a class of handicapping methods based upon careful analysis of sports data and thorough testing of model performance.

There is recreational betting. This can be fun. There is betting out of necessity or perceived necessity, induced perhaps by poverty or addiction. This is sad. And there is rational betting, betting when it makes sense to do so. This is a test of wit. Without a Tout is about betting when it makes sense to do so, when the odds are in our favor. ',140,'0-9727297-8-X','978-0-9727297-8-9',3000,'wat_cover.gif',NULL,'','Author','Thomas W. Miller','','','','','','Anthony L. Hamelink','Jane Tenenbaum',NULL,NULL);
INSERT INTO `book` VALUES (2,'Without a Tout: How to Pick a Winning Team','Electronic','Without a Tout is a practical, no-nonsense guide to building models for team sports. Making predictive models accessible to the nontechnical reader, the book describes a class of handicapping methods based upon careful analysis of sports data and thorough testing of model performance. ',140,'1--60147--200--5','978--1--60147--200--7',2400,'wat_cover.gif',NULL,'','Author','Thomas W. Miller',NULL,NULL,NULL,NULL,NULL,'Anthony L. Hamelink','Jane Tenenbaum',NULL,NULL);
INSERT INTO `book` VALUES (3,'Getting Started with Conjoint Analysis: Strategies for Product Design and Pricing Research','Print','Ask people what they want, and they say, “the best of everything.”  Ask them what they would like to spend, and they say, “as little as possible.”  Assessing consumer preferences and willingness to pay through direct rating scales, with separate questions about product features and prices, often fails to capture the tradeoffs that underlie consumer choice.

Conjoint analysis goes beyond simple surveys, providing a more realistic approach to understanding consumer attitudes, opinions, and behavior.  Introduced as a fundamental measurement method more than forty years ago, conjoint analysis presents combinations of features or attributes in product profiles and asks people to rank or rate those product profiles or to make choices among product profiles.

With new chapters about adaptive choice-based conjoint and maximum difference scaling and additional examples of business applications, the second edition of Getting Started with Conjoint Analysis continues to provide an excellent introduction to conjoint and choice methods.',252,NULL,'978-0-9727297-7-2',4000,'gsca2_cover2ed.jpg','The cover artwork for Getting Started with Conjoint Analysis, entitled Mask of Fear, is by Paul Klee (1879-1940): Maske Furcht, 1932, 286 (Y 6) 100 x 57 cm Ölfarbe auf Jute auf Keilrahmen, The Museum of Modern Art, New York.

The cover was designed by Jane Tenenbaum of Tenenbaum Design, Cambridge, Massachusetts.

Cover artwork is consistent with the content of the book. The book deals with methodologies for consumer and business research and the choices that buyers make under an assumed utility maximization motive. When looking at the artwork, we imagine the face of a bewildered consumer, enough feet to go in many directions at once, and an arrow pointing upward out of his head (a possible symbol for utility maximization).',NULL,'Author','Bryan K. Orme',NULL,NULL,NULL,NULL,NULL,'Jane Tenenbaum',NULL,NULL,NULL);
INSERT INTO `book` VALUES (4,'Getting Started with Conjoint Analysis: Strategies for Product Design and Pricing Research','Electronic','Ask people what they want, and they say, “the best of everything.”  Ask them what they would like to spend, and they say, “as little as possible.”  Assessing consumer preferences and willingness to pay through direct rating scales, with separate questions about product features and prices, often fails to capture the tradeoffs that underlie consumer choice.

Conjoint analysis goes beyond simple surveys, providing a more realistic approach to understanding consumer attitudes, opinions, and behavior.  Introduced as a fundamental measurement method more than forty years ago, conjoint analysis presents combinations of features or attributes in product profiles and asks people to rank or rate those product profiles or to make choices among product profiles.

With new chapters about adaptive choice-based conjoint and maximum difference scaling and additional examples of business applications, the second edition of Getting Started with Conjoint Analysis continues to provide an excellent introduction to conjoint and choice methods.',252,NULL,'978-1-60147-110-9',3200,'gsca2_cover2ed.jpg','The cover artwork for Getting Started with Conjoint Analysis, entitled Mask of Fear, is by Paul Klee (1879-1940): Maske Furcht, 1932, 286 (Y 6) 100 x 57 cm Ölfarbe auf Jute auf Keilrahmen, The Museum of Modern Art, New York.

The cover was designed by Jane Tenenbaum of Tenenbaum Design, Cambridge, Massachusetts.

Cover artwork is consistent with the content of the book. The book deals with methodologies for consumer and business research and the choices that buyers make under an assumed utility maximization motive. When looking at the artwork, we imagine the face of a bewildered consumer, enough feet to go in many directions at once, and an arrow pointing upward out of his head (a possible symbol for utility maximization).','','Author','Bryan K. Orme','',NULL,NULL,NULL,NULL,'Jane Tenenbaum',NULL,NULL,NULL);
CREATE TABLE "author" (
	`id`	INTEGER NOT NULL,
	`author`	TEXT NOT NULL,
	`biography`	TEXT,
	PRIMARY KEY(`id`)
);
INSERT INTO `author` VALUES (1,'Thomas W. Miller','Thomas W. Miller is faculty director of the Predictive Analytics program at Northwestern University. He has designed and taught courses in the program, including Marketing Analytics, Advanced Modeling Techniques, Data Visualization, Database Systems and Data Preparation, Sports Management Analytics, Web and Network Data Science, Regression Analysis and Multivariate Methods, and the capstone course. Before joining the faculty at Northwestern, Miller spent fifteen years in business IT in the computer and transportation industries. He also directed the A. C. Nielsen Center for Marketing Research and taught market research and business strategy at the University of Wisconsin-Madison. He is the author of numerous books about research and modeling methods. He has consulted widely in business research and data science for over thirty years. Miller holds a Ph.D. in psychology (psychometrics) and a master''s degree in statistics from the University of Minnesota and an MBA and master''s degree in economics from the University of Oregon.');
INSERT INTO `author` VALUES (2,'Bryan K. Orme','Bryan K. Orme is the president of Sawtooth Software, Inc., a leading developer of conjoint analysis tools. Having worked at the firm for more than ten years, his responsibilities include research and development, consulting services, customer education, the specification of software capabilities, and documentation. Prior to joining Sawtooth Software, he worked in the marketing sciences department at IntelliQuest, Inc.

Bryan has authored or coauthored more than fifty articles and white papers on conjoint analysis and related techniques. His papers have appeared in Marketing Research, Canadian Journal of Marketing Research, and Quirk''s Marketing Research Review. He received the David K. Hardin award for the best paper published in Marketing Research in 2004. An active participant at the American Marketing Association''s Advanced Research Techniques forum (A/R/T), Bryan was co-recipient of the Best Presentation award at A/R/T in 1996 and 2004. He served on the Program Committee in 2002 and chaired the event in 2003.

A student of English and Economics at Brigham Young University, Bryan received his BA in 1991. He then earned his MBA from the University of Texas at Austin in 1993. Bryan and his wife of fifteen years, Chandra, have seven children and reside in Poulsbo, Washington.');
CREATE TABLE "artist" (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`artist`	TEXT NOT NULL,
	`biography`	TEXT
);
INSERT INTO `artist` VALUES (1,'Anthony L. Hamelink','Windsor, Wisconsin');
INSERT INTO `artist` VALUES (2,'Jane Tenenbaum','Tenenbaum Design, Cambridge, Massachusetts');
COMMIT;
