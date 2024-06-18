

CREATE TABLE public.petslikes(
petid int4,
userid int4,
CONSTRAINT NoDuplicateLike UNIQUE (petid, userid)
);


CREATE TABLE public.favs(
petid int4,
userid int4,
CONSTRAINT NoDuplicateFav UNIQUE (petid, userid)
);

CREATE TABLE public.msgs(
petid int4,
userid int4,
username varchar(16) NOT NULL, 
messagetxt text NULL,
dateregistered timestamp NOT NULL DEFAULT now(),
datemodified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

//in case of existing table
ALTER TABLE petslikes
ADD CONSTRAINT NoDuplicateLike UNIQUE (petid, userid);

//sql added to model function
ON CONFLICT ON CONSTRAINT  NoDuplicateLike  
DO NOTHING RETURNING userid
