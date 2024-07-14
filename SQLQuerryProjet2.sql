
--Anne Sophie Roz�fort 20189221
--�manuel Rollin 20106951

USE master;
GO
ALTER DATABASE ApplicationDeRecette SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
DROP DATABASE IF EXISTS ApplicationDeRecette;
GO
CREATE DATABASE ApplicationDeRecette;
GO

use ApplicationDeRecette;
GO


DROP TABLE IF EXISTS recettes;

CREATE TABLE recettes (
	id int,
	nom varchar(50),
	image_recette varchar(50),
    prep_time varchar(25),
	cook_time VARCHAR(25),
    type_recette varchar(25),
    description_recette TEXT
	CONSTRAINT keyConstraintID PRIMARY KEY(id)
);
GO

-- 	Remplir la base de donn�es

-- Table Personnel
INSERT INTO recettes (id, nom, image_recette, prep_time, cook_time, type_recette, description_recette) VALUES 
(1, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(2, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(3, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(4, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(5, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(6, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(7, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(8, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(9, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................'),
(10, 'POULET FRIT AU PARMESAN', 'pouletparmesan.jfif', '30', '20', 'POULET', '...................');
GO