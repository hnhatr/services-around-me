

/**
*	Shop bussiness online
*	DB drop if exists
*/
DROP DATABASE `businessonline`;


/**
*	Shop bussiness online
*	DB create
*/
CREATE DATABASE `businessonline`;


USE `businessonline`;

-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- tables
-- Table: Store
DROP TABLE IF EXISTS `Store`;

CREATE TABLE Store (
   StoreID varchar(10) NOT NULL,
   Name varchar(50) NOT NULL,
   Address varchar(60) NOT NULL,
   Phone varchar(24) NOT NULL,
   Longitude real(10,4) NOT NULL,
   Latitude real(10,4) NOT NULL,
   Email varchar(30) NULL,
   OpeningTime date NOT NULL,
   ClosingTime date NOT NULL,
   Rating int NULL,
   Description text NULL,
   StoreCategoryID varchar(10) NOT NULL,
   CONSTRAINT Store_pk PRIMARY KEY (StoreID)
) COMMENT 'Thông tin cửa hàng (STORE) đăng kí bussiness online.';
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- tables
-- Table: Product
DROP TABLE IF EXISTS `Product`;

CREATE TABLE Product (
   ProductID varchar(10) NOT NULL,
   ProductName varchar(30) NOT NULL,
   ProductCode varchar(10) NULL,
   Price bigint NULL,
   ProductCategoryID varchar(10) NOT NULL,
   Description text NULL,
   Status varchar(4) NOT NULL,
   Discount bool NOT NULL,
   Picture binary(255) NULL,
   SupplierID varchar(10) NOT NULL,
   CONSTRAINT Product_pk PRIMARY KEY (ProductID)
) COMMENT 'Thông tin của một sản phẩm';
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- tables
-- Table: Supplier
DROP TABLE IF EXISTS `Supplier`;

CREATE TABLE Supplier (
   SupplierID varchar(10) NOT NULL,
   CompanyName varchar(30) NOT NULL,
   Country varchar(15) NULL,
   Address varchar(60) NOT NULL,
   Phone varchar(24) NOT NULL,
   CONSTRAINT Supplier_pk PRIMARY KEY (SupplierID)
) COMMENT 'Thông tin nhà sản xuất của sản phẩm';
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- tables
-- Table: Store_Categories
DROP TABLE IF EXISTS `Store_Categories`;

CREATE TABLE Store_Categories (
   StoreCategoryID varchar(10) NOT NULL,
   StoreCategoryName varchar(15) NOT NULL,
   ProductCategoryID varchar(10) NOT NULL,
   CONSTRAINT Store_Categories_pk PRIMARY KEY (StoreCategoryID)
) COMMENT 'Danh sách các loại store ';
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- tables
-- Table: Product_Categories
DROP TABLE IF EXISTS `Product_Categories`;

CREATE TABLE Product_Categories (
   ProductCategoryID varchar(10) NOT NULL,
   ProductCategoryName varchar(30) NOT NULL,
   Description Text NULL,
   CONSTRAINT Product_Categories_pk PRIMARY KEY (ProductCategoryID)
) COMMENT 'Danh sách loại sản phẩm';
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- foreign keys
-- Reference: PRODUCT_CATEGORIES (table: Product)
ALTER TABLE Product ADD CONSTRAINT PRODUCT_CATEGORIES FOREIGN KEY PRODUCT_CATEGORIES (ProductCategoryID)
   REFERENCES Product_Categories (ProductCategoryID);
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- foreign keys
-- Reference: PRODUCT_SUPPLIER (table: Product)
ALTER TABLE Product ADD CONSTRAINT PRODUCT_SUPPLIER FOREIGN KEY PRODUCT_SUPPLIER (SupplierID)
   REFERENCES Supplier (SupplierID);
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- foreign keys
-- Reference: Store_Categories_Product_Categories (table: Store_Categories)
ALTER TABLE Store_Categories ADD CONSTRAINT Store_Categories_Product_Categories FOREIGN KEY Store_Categories_Product_Categories (ProductCategoryID)
   REFERENCES Product_Categories (ProductCategoryID);
-- End of file.


-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2017-03-25 03:50:34.054
-- foreign keys
-- Reference: STORE_STORECATEGORIES (table: Store)
ALTER TABLE Store ADD CONSTRAINT STORE_STORECATEGORIES FOREIGN KEY STORE_STORECATEGORIES (StoreCategoryID)
   REFERENCES Store_Categories (StoreCategoryID);
-- End of file.
