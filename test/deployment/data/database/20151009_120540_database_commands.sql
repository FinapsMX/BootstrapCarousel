DROP INDEX "idx_myfirstmodule$entity_2_images_myfirstmodule$images_myfirstmodule$content";
ALTER TABLE "myfirstmodule$entity_2_images" RENAME TO "6c44facf20434229bae42b6eaffb12a9";
ALTER TABLE "myfirstmodule$images" RENAME TO "0b988c4865d2408ebbc40c52efa315e8";
UPDATE "mendixsystem$entity"
 SET "entity_name" = 'MyFirstModule.Content', 
"table_name" = 'myfirstmodule$content', 
"superentity_id" = '37827192-315d-4ab6-85b8-f626f866ea76'
 WHERE "id" = 'a3328784-35fd-4aed-8781-d39f66f87917';
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '835f8ad5-3ca0-44b3-ac1e-d84f2e7b3781';
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '4f1443f5-fde8-49bf-9f2c-f9d04c8a7065';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '4f1443f5-fde8-49bf-9f2c-f9d04c8a7065';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '4f1443f5-fde8-49bf-9f2c-f9d04c8a7065');
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '4f1443f5-fde8-49bf-9f2c-f9d04c8a7065';
DELETE FROM "system$image" 
 WHERE "id" IN (SELECT "id"
 FROM "0b988c4865d2408ebbc40c52efa315e8");
DELETE FROM "system$filedocument" 
 WHERE "id" IN (SELECT "id"
 FROM "0b988c4865d2408ebbc40c52efa315e8");
INSERT INTO "system$filedocument" ("id", 
"submetaobjectname", 
"__filename__", 
"hascontents", 
"fileid", 
"deleteafterdownload")
SELECT "id", 
'MyFirstModule.Content', 
NEXT VALUE FOR "system$filedocument___filename___mxseq", 
false, 
NEXT VALUE FOR "system$filedocument_fileid_mxseq", 
false
 FROM "myfirstmodule$content"
 ORDER BY "id" ASC;
INSERT INTO "system$image" ("id", 
"submetaobjectname")
SELECT "id", 
'MyFirstModule.Content'
 FROM "myfirstmodule$content"
 ORDER BY "id" ASC;
DROP TABLE "6c44facf20434229bae42b6eaffb12a9";
DROP TABLE "0b988c4865d2408ebbc40c52efa315e8";
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.0.7', 
"lastsyncdate" = '20151009 12:05:14';
