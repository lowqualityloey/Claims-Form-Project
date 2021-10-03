CREATE TABLE "form"(
  id SERIAL PRIMARY KEY,
  claimId INT,
  status TEXT,
  timeCreated TIMESTAMP,
  policy INT,
  customerId INT,
  condition TEXT,
  symptomStart DATE,
  symptoms TEXT,
  serviceType TEXT,
  provider TEXT,
  providerAlt BOOLEAN,
  providerAltName TEXT,
  providerAltDesc TEXT
);