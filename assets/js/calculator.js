// Initial version generated with Claude (Anthropic). See README > Generative AI Reflection.

const PRESETS = {
  tvSmall: { label: "a small TV", watts: 43, hours: 5 },
  tvMedium: { label: "a medium TV", watts: 111, hours: 5 },
  tvLarge: { label: "a large TV", watts: 205, hours: 5 },
  computer: { label: "a desktop computer", watts: 100, hours: 4 },
  microwave: { label: "a microwave", watts: 1100, hours: 0.25 },
  custom: { label: "your appliance", watts: null, hours: null }
};

const DAYS_PER_YEAR = 365;
const MONTHS_PER_YEAR = 12;

const fields = {
  watts: {
    input: document.getElementById("watts"),
    error: document.getElementById("watts-error"),
    name: "power rating",
    emptyText: "Enter a power rating.",
    min: 1,
    max: 10000,
    rangeText: "between 1 and 10,000 W"
  },
  hours: {
    input: document.getElementById("hours"),
    error: document.getElementById("hours-error"),
    name: "number of hours",
    emptyText: "Enter the hours used per day.",
    min: 0.25,
    max: 24,
    rangeText: "between 0.25 and 24 hours"
  },
  price: {
    input: document.getElementById("price"),
    error: document.getElementById("price-error"),
    name: "electricity price",
    emptyText: "Enter an electricity price.",
    min: 0.01,
    max: 5,
    rangeText: "between $0.01 and $5.00 per kWh"
  }
};

const form = document.getElementById("calc-form");
const applianceSelect = document.getElementById("appliance");
const emptyMessage = document.getElementById("results-empty");
const output = document.getElementById("results-output");

const kwhFormat = new Intl.NumberFormat("en-AU", { maximumFractionDigits: 2 });
const moneyFormat = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" });

let hasSubmitted = false;

function readField(field) {
  const raw = field.input.value.trim();

  if (raw === "") {
    return { error: field.emptyText };
  }

  const value = Number(raw);

  if (!Number.isFinite(value)) {
    return { error: `The ${field.name} must be a number.` };
  }

  if (value < field.min || value > field.max) {
    return { error: `Enter a value ${field.rangeText}.` };
  }

  return { value };
}

function showError(field, message) {
  field.error.textContent = message;
  field.input.setAttribute("aria-invalid", "true");
  field.input.closest(".field").classList.add("has-error");
}

function clearError(field) {
  field.error.textContent = "";
  field.input.removeAttribute("aria-invalid");
  field.input.closest(".field").classList.remove("has-error");
}

function calculate(watts, hours, price) {
  const dailyKwh = (watts * hours) / 1000;
  const yearlyKwh = dailyKwh * DAYS_PER_YEAR;
  const monthlyKwh = yearlyKwh / MONTHS_PER_YEAR;

  return {
    dailyKwh,
    monthlyKwh,
    yearlyKwh,
    monthlyCost: monthlyKwh * price,
    yearlyCost: yearlyKwh * price
  };
}

function setKwh(id, value) {
  document.getElementById(id).innerHTML = `${kwhFormat.format(value)}<span>kWh</span>`;
}

function showResults(result, values) {
  document.getElementById("result-appliance").textContent = PRESETS[applianceSelect.value].label;
  document.getElementById("result-yearly-cost").textContent = moneyFormat.format(result.yearlyCost);
  document.getElementById("result-monthly-cost").textContent = moneyFormat.format(result.monthlyCost);
  setKwh("result-daily-kwh", result.dailyKwh);
  setKwh("result-monthly-kwh", result.monthlyKwh);
  setKwh("result-yearly-kwh", result.yearlyKwh);

  emptyMessage.hidden = true;
  output.hidden = false;

  if (typeof drawComparison === "function") {
    drawComparison(result, values, applianceSelect.value);
  }
}

function showInvalid() {
  output.hidden = true;
  emptyMessage.hidden = false;
  emptyMessage.textContent = "Fix the highlighted fields to see your estimate.";
}

function update() {
  const values = {};
  let isValid = true;

  for (const key in fields) {
    const field = fields[key];
    const result = readField(field);

    if (result.error) {
      showError(field, result.error);
      isValid = false;
    } else {
      clearError(field);
      values[key] = result.value;
    }
  }

  if (isValid) {
    showResults(calculate(values.watts, values.hours, values.price), values);
  } else {
    showInvalid();
  }
}

function applyPreset() {
  const preset = PRESETS[applianceSelect.value];

  if (preset.watts !== null) {
    fields.watts.input.value = preset.watts;
    fields.hours.input.value = preset.hours;
  }
}

function markCustom() {
  if (Number(fields.watts.input.value) !== PRESETS[applianceSelect.value].watts) {
    applianceSelect.value = "custom";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hasSubmitted = true;
  update();
});

form.addEventListener("input", (event) => {
  if (event.target === applianceSelect) {
    applyPreset();
  } else if (event.target === fields.watts.input) {
    markCustom();
  }

  if (hasSubmitted) {
    update();
  }
});
