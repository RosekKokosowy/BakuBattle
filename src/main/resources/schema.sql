create table if not exists Players (
    id identity,
    name varchar(30) not null,
    teams_name varchar(30) not null
);

create table if not exists Teams (
     id identity,
     name varchar(30) not null
);

create table if not exists Players_Teams (
    player bigint not null,
    team bigint not null
);

alter table Players_Teams add foreign key (player) references Players(id);
alter table Players_Teams add foreign key (team) references Teams(id);

create table if not exists Bakugans (
    id identity,
    name varchar(50) not null,
    type varchar(30) not null,
    hp int not null,
    xpMultiplier double not null,
    transferSingle varchar(100) not null,
    transferArea varchar(100) not null,
    attackSingle varchar(100) not null,
    attackArea varchar(100) not null,
    hpboostv1 varchar(100) not null,
    hpboostv2 varchar(100) not null,
    healSingle varchar(100) not null,
    healArea varchar(100) not null,
    igniteSingle varchar(100) not null,
    igniteArea varchar(100) not null
);

create table if not exists Players_Bakugans (
    player bigint not null,
    bakugan bigint not null
);

alter table Players_Bakugans add foreign key (player) references Players(id);
alter table Players_Bakugans add foreign key (bakugan) references Bakugans(id);