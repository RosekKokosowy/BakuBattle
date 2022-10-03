delete from Bakugans;
delete from Players_Teams;
delete from Players;
delete from Teams;
delete from Players_Bakugans;

INSERT INTO Bakugans (id,name,type, hp, xpMultiplier, transferSingle, transferArea, attackSingle, attackArea, hpBoostv1, hpBoostv2, healSingle, healArea, igniteSingle, igniteArea) VALUES
(1, 'Apophix', 'TANK', 1700, 0.25, 'Suchy Swiat','Odglos Aquosa','Fala Ucisku','Rwaca Fala','Dominacja Aquosa','Wysycenie','Sztorm','Podwodna Ruina', 'Morska Bryza', 'Oceaniczny Blysk'),
(2, 'Babadrill','SUPPORT_OFFENCE', 1200, 0.25, 'Strzal Morskiego Pylu' , 'Wodna Kraina', 'Podwojny Powrot', 'Mgliste Zniszczenie', 'Skrzydlo Mercurego', 'Delta Snieg Morski', 'Zagluszanie', 'Niebieska tarcza', 'Wir Aquosa', 'Duma Posejdona'),
(3, 'Serpillious','BRUISER_OFFENCE', 1500, 0.29, 'Postrach Oceanu', 'Lustrzane Kopie', 'Rozszczepiajaca Toksyna', 'Sluszny Pospiech', 'Smocze Oblicze', 'Metalowy Pazur', 'Rybie Kleszcze', 'Wodniste Pnacza', 'Zbawienie Aquosa', 'Boski Przyplyw'),
(4, 'Centipod', 'ASSASSIN', 1300, 0.25, 'Prysznic Kwasu', 'Smiertelny Przyplyw', 'Merfolk', 'Mega Loscania', 'Megalo Bariera', 'Trujaca Rozkosz', 'Chitynowa Tama', 'Watlosc Wegorza', 'Podmuch Oceanu', 'Gniew Posejdona'),
(5, 'Cycloid', 'SUPPORT_DEFENCE', 1400, 0.24, 'Trujacy Bicz', 'Zmija Gorhony', 'Atak Lowcy', 'Trucizna', 'Olbrzym Oceanu', 'Prymat Cyklonu', 'Podwodna Klatka', 'Ukryty Pazur', 'Wsparcie Aquosa', 'Lodolamacz'),
(6, 'Gillator', 'BRUISER_TANK', 1600, 0.26, 'Strumien Strachu', 'Agenda Wiru', 'Gniew Aquosa', 'Mina Aquosa', 'Cyklon Glebin', 'Inpuls Nacisku', 'Zemsta Atlantydy', 'Osłona Cyklonu', 'Wodny Niszczyciel', 'Zracy Ocean'),
(7, 'Dragonoid', 'BRUISER_OFFENCE', 1500, 0.27, 'Czarownik Ciemnosci', 'Ostatni Darkus', 'Mlot Mglawicy', 'Zaklinacz Grawitonu', 'Potega Darkusa', 'Anarchia Ciemnosci', 'Zwatpienie', 'Zaslona Mroku', 'Przekleta Kraina', 'Mroczny Motyw'),
(8, 'Gillator', 'ASSASSIN', 1400, 0.3, 'Strumien Strachu', 'Agenda Ciemnosci', 'Metalowy Gniew', 'Rozszczepienie', 'Zacmienie', 'Inpuls Nacisku', 'Mroczny Bunkier', 'Osłona Ciemnosci', 'Skazone Ostrze', 'Fala Frustracji'),
(9, 'Howlkor', 'SUPPORT_DEFENCE', 1300, 0.24, 'Krzyk Kwazaru', 'Miotacz', 'Kwazar Zniszczenia', 'Dzialo Ragnaroka', 'Farbas', 'Wielki Wojownik', 'Miotacz 2.0', 'Blok Ostrzalu', 'Nadzieja Skazanca', 'Przekleta Przysiega'),
(10, 'Nillious', 'BRUISER_TANK', 1600, 0.27, 'Zament Darkusa', 'Trojzab Zniszczenia', 'Trojzab Zaru', 'Promien Mocy', 'Cisza Grozy', 'Burza Darkusa', 'Trojzab Zaglady', 'Tarcza Kosmosu', 'Wola Hadesa', 'Tartar'),
(11, 'Sairus', 'SUPPORT_OFFENCE', 1400, 0.23, 'Atak Otchlani', 'Poziom Zero', 'Sila Zniszczenia', 'Wyssanie Mocy', 'Ekstremalny Blysk', 'Cichy Mrok', 'Koszmar Indygo', 'Mroczna Blokada', 'Destrukcja Darkusa', 'Zaslona Zametu'),
(12, 'Viloch', 'TANK', 1800, 0.21, 'Fala Exodusu', 'Podmuch Zla', 'Szczytowa Fala', 'Otchlan Ciemnosci', 'Sonda Ognia', 'Blysk Ciemnosci', 'Osłona Ciemnosci', 'Mroczny Jezdziec', 'Nienawisc', 'Opanowanie'),
(13, 'Hydranoid', 'BRUISER_TANK', 1500, 0.28, 'Szalenstwo Mirazu', 'Zmije Gorhony', 'Dysza Mirazu', 'Cios Aurory', 'Zludzenie', 'Aleja Oswiecenia', 'Ryk Valkyrii', 'Swiatlo Wsparcia', 'Wezwanie Haosu', 'Boskosc'),
(14, 'Mantonoid', 'TANK', 1800, 0.2, 'Magiczny Maniatus', 'Pierscienie Magii', 'Klatka Duchow', 'Kosa Haosu', 'Bariera Moczarow', 'Wymiar Aurory', 'Ryk Mocy Haosu', 'Lzy Haosu', 'Skutek Rozpaczy', 'Anielska Opatrznosc'),
(15, 'Mutasect', 'SUPPORT_DEFENCE', 1200, 0.27, 'Zadlo Arkadii', 'Kiel Mocy', 'Spiralne Ostrze', 'Zludzenie Swiatlosci', 'Skowyt Haosu', 'Zadlo Skolla', 'Wierzcholek Blysku', 'Tarcza Garma', 'Zeslanie', 'Posmak Smierci'),
(16, 'Nobilious', 'SUPPORT_OFFENCE', 1300, 0.22, 'Spirala Hyentu', 'Wichrowa Burza', 'Niebianski Podmuch', 'Fala Swiatlosci', 'Zew Wolnosci', 'Światlosc Haosu', 'Cyklon Jasnosci', 'Podniebna Tarcza', 'Oswiecenie', 'Deszcz Odrodzenia'),
(17, 'Phaedrus', 'BRUISER_OFFENCE', 1400, 0.3, 'Predkosc Smoka', 'Wyrok Haosu', 'Blysk Przeznaczenia', 'Metalowy Kiel', 'Tornado Swiatla', 'Hiper Dzialo', 'Oblicze Haosu', 'Tarcza Blyskawic', 'Reinkarnacja', 'Zorza Polarna'),
(18, 'Sairus', 'ASSASSIN', 1200, 0.29, 'Flanka Goliata', 'Armata Urazy', 'Flanka Fausta', 'Zmiana Torsena', 'Wzmocnienie Haosu', 'Anarchia', 'Tarcza Mocy', 'Promienie Pomocy', 'Wyrok Aurory', 'Boska Przemiana'),
(19, 'Dragonoid', 'TANK', 1800, 0.21, 'Smocza Moc', 'Ostatni Pyrus', 'Mglawica Ognia', 'Zaklinacz Plomienia', 'Potega Pyrusa', 'Anarchia Plomieni', 'Zal Spalonych', 'Zaslona Ognia', 'Rdzen Pyrusa', 'Pozoga'),
(20, 'Fangzor', 'BRUISER_TANK', 1600, 0.24, 'Erupcja Pyrusa', 'Neo Value', 'Redukcja Saiam', 'Sila Rozproszenia', 'Duma Weza', 'Eksplozja Nieskonczoności', 'Maksymalna Rewolucja', 'Weza Skora', 'Feniks', 'Dolina Plomieni'),
(21, 'Garganoid', 'SUPPORT_OFFENCE', 1300, 0.27, 'Kapelusz Hammera', 'Wojownik Karli', 'Armia Metalu', 'Skretocios', 'Podwojny Pazur', 'Dominacja Pyrusa', 'Pazur Ognia', 'Ognista Zasłona', 'Zew Gargulca', 'Plonace Pnacza'),
(22, 'Serpenteze', 'SUPPORT_DEFENCE', 1500, 0.2, 'Scisk Korundu', 'Inwazja ', 'Pole Zludzenia', 'Rubinowy Zabojca', 'Szkarlatna Tafla', 'Czerwona Glebina', 'Dymiąca Jaskinia', 'Szkarlatna Obrona', 'Oslepiajacy Popiol', 'Sprawiedliwy Ogien'),
(23, 'Viperagon', 'ASSASSIN', 1400, 0.28, 'Pojedynczy Smok', 'Podwojny Smok', 'Rdzen Elementu', 'Skuteczny Podzial', 'Płomienny Wymiar', 'Smocza Pycha', 'Wsparcie Pyrusa', 'Oslona Pozogi', 'Kwazar Pyrusa', 'Msciwy Pozar'),
(24, 'Hydranoid', 'BRUISER_OFFENCE', 1600, 0.23, 'Szalenstwo Mirazu', 'Zmije Gorhony', 'Dysza Mirazu', 'Zarzacy Cios', 'Zludzenie', 'Aleja Plomieni', 'Zamet Valkyrii', 'Znak Wsparcia', 'Ocalenie', 'Smocze Odkupienie'),
(25, 'Auxillataur', 'ASSASSIN', 1500, 0.21, 'Wielki Herkules', 'Okrzyk Bitewny', 'Elektryczny Lancuch', 'Dzialo Ifryta', 'Elektryczny Szok', 'Diamentowy Smok', 'Pancerna Skorupa', 'Znak Wsparcia', 'Wyrok Subterry', 'Trzesienie Ziemi'),
(26, 'Mantonoid', 'BRUISER_TANK', 1700, 0.2, 'Magiczny Maniatus', 'Pierscienie Magii', 'Klatka Duchow', 'Kosa Subterry', 'Bariera Moczarow', 'Sciana Nadzieji', 'Ryk Mocy Subterry', 'Lzy Gai', 'Przegrupowanie', 'Oznaka Trwogi'),
(27, 'Nillious', 'SUPPORT_OFFENCE', 1400, 0.23, 'Zament', 'Poziom Zero', 'Wyssany Grunt', 'Promien Mocy', 'Cisza', 'Burza Gai', 'Podziemny Los', 'Tarcza Subterry', 'Wirujacy Podzial', 'Rozgrzany Granit'),
(28, 'Phaedrus', 'BRUISER_OFFENCE', 1500, 0.25, 'Predkosc Smoka', 'Porazenie', 'Blysk Przeznaczenia', 'Metalowy Kiel', 'Skaliste Tornado', 'Hiper Dzialo', 'Podwojne Oblicze', 'Tarcza Blyskawic', 'Reinkarnacja', 'Przyziemna Rozwaga'),
(29, 'Pincitaur', 'SUPPORT_DEFENCE', 1300, 0.26, 'Wybuch Atomowej Ziemi', 'Ziemskie Oblicze', 'Granat Mocy', 'Przedwczesny Wybuch', 'Podziemny Wybuch', 'Ziemny Rewolwer', 'Moc Granitu', 'Wsparcie Subterry', 'Zlosc Olbrzyma', 'Rozsadek'),
(30, 'Skorporos', 'TANK', 1600, 0.3, 'Wibrowiatr', 'Tytanowa Piesc', 'Uderzenie Swidra', 'Zadlo Smierci', 'Hiper Zderzenie', 'Ozywienie', 'Wielka Egida', 'Wiezienie Subterry', 'Skalisty Pancerz', 'Kamienna Oslona'),
(31, 'Auxillataur', 'BRUISER_TANK', 1600, 0.28, 'Wielki Herkules', 'Okrzyk Bitewny', 'Elektryczny Łancuch', 'Dzialo Ifryta', 'Elektryczny Szok', 'Pancerna Skorupa', 'Zbroja Ofensywy', 'Skowyt Wiatru', 'Wola Ventusa', 'Zawierucha'),
(32, 'Serpillious', 'TANK', 1800, 0.23, 'Postrach Wiatru', 'Lustrzane Kopie', 'Rozszczepiajaca Toksyna', 'Sluszny Pospiech', 'Armia Smierci', 'Metalowy Pazur', 'Kleszcze Ventusa', 'Piorunujace Pnacza', 'Smiercionosny Deszcz', 'Inwazyjny Wiatr'),
(33, 'Viperagon', 'BRUISER_OFFENCE', 1400, 0.3, 'Pojedynczy Smok', 'Podwojny Smok', 'Rdzen Elementu', 'Skuteczny Podzial', 'Otchlan Ventusu', 'Smocza Pycha', 'Wsparcie Ventusa', 'Oslona Madrosci', 'Oddany Wojownik', 'Niszczycielski Piorun'),
(34, 'Viloch', 'ASSASSIN', 1300, 0.29, 'Fala Exodusu', 'Podmuch Zla', 'Szczytowa Fala', 'Otchlan Ventusa', 'Sonda Ognia', 'Blysk Zniszczenia', 'Osłona Ventusa', 'Burzowy Jezdziec', 'Swiadkowie Przemiany', 'Zwiastun Wichru'),
(35, 'Talan', 'SUPPORT_DEFENCE', 1500, 0.2, 'Blysk Pioruna', 'Ogien Piorunow', 'Wirujacy Spodek', 'Dzialo Szoku', 'Blysk Agresji', 'Blask Pioruna', 'Mega Tarcza', 'Detonator Pioruna', 'Ofiara', 'Sedzia Cyklonu'),
(36, 'Webam', 'SUPPORT_OFFENCE', 1500, 0.2, 'Wiedza Feniksa', 'Uderzenie Pioruna', 'Pajecza Siec', 'Niszczacy Deszcz Meteorow', 'Wiatr Wscieklosci', 'Destrukcyjny Delta Deszcz', 'Wsciekla Burza', 'Vivat Ventusa', 'Okaleczone Ruiny', 'Rozwarcie Niebios');
