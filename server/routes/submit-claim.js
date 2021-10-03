const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      policy,
      customerId,
      condition,
      symptomStart,
      symptoms,
      serviceType,
      provider,
      providerAlt,
      providerAltName,
      providerAltDesc,
      consent,
    } = req.body;

    if (consent !== true) {
      return res.status(400).json({
        error: true,
        errorType: "consent",
        message: "You must consent to our terms of service",
      });
    }

    if (
      policy === undefined ||
      customerId === undefined ||
      condition === undefined ||
      symptomStart === undefined ||
      symptoms === undefined ||
      serviceType === undefined ||
      provider === undefined ||
      providerAlt === undefined
    ) {
      return res.status(400).json({
        error: true,
        type: "badInput",
        message: "Some fields were missing.",
      });
    }

    let sql = "";
    let data = [];

    if (providerAlt === false) {
      sql = `
        INSERT INTO form (claimId, status, timeCreated, policy, customerId, condition, symptomStart, symptoms, serviceType, provider, providerAlt)
        VALUES (nextval('form_sequence'), 'submitted', current_timestamp, $1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING claimId, status, timeCreated, policy, customerId, condition, symptomStart, symptoms, serviceType, provider, providerAlt`;
      data = [
        policy,
        customerId,
        condition,
        symptomStart,
        symptoms,
        serviceType,
        provider,
        providerAlt,
      ];
    } else if (providerAlt === true) {
      if (!providerAltDesc || !providerAltName) {
        return res.status(400).json({
          error: true,
          type: "badInput",
          message:
            "Please tell us more about your alternate insurance provider",
        });
      }

      sql = `
          INSERT INTO form (claimId, status, timeCreated, policy, customerId, condition, symptomStart, symptoms, serviceType, provider, providerAlt, providerAltName, providerAltDesc)
          VALUES (nextval('form_sequence'), 'submitted', $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING claimId, status, timeCreated, policy, customerId, condition, symptomStart, symptoms, serviceType, provider, providerAlt, providerAltName, providerAltDesc`;
      data = [
        policy,
        customerId,
        condition,
        symptomStart,
        symptoms,
        serviceType,
        provider,
        providerAlt,
        providerAltName,
        providerAltDesc,
      ];
    }

    // SQL is set above in conditional statements
    const query = await pool.query(sql, data);
    return res.json(query.rows[0]);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      error: true,
      type: "unknown",
      message: "An unknown error has occurred",
    });
  }
});

module.exports = router;
