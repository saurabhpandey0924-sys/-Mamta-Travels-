/**
 * Mamta Travels - Corporate Commute ROI Calculator
 */

export function initCorporateCalculator() {
  const slider = document.getElementById('calc-employees-slider');
  const countLabel = document.getElementById('calc-employees-count');
  const traditionalCostEl = document.getElementById('calc-traditional-cost');
  const mamtaCostEl = document.getElementById('calc-mamta-cost');
  const netSavingsEl = document.getElementById('calc-net-savings');

  if (!slider) return;

  // Pricing Model:
  // Average private cab/dedicated transport per employee/month: ₹8,500
  // Mamta Travels Corporate Pass per employee/month: ₹5,500
  // Savings: ₹3,000 / employee / month (~35% reduction)

  function updateCalculations() {
    const employees = parseInt(slider.value, 10);
    if (countLabel) countLabel.textContent = `${employees} Commuters`;

    const traditionalTotal = employees * 8500;
    const mamtaTotal = employees * 5500;
    const netSavings = traditionalTotal - mamtaTotal;

    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });

    if (traditionalCostEl) traditionalCostEl.textContent = formatter.format(traditionalTotal) + ' / mo';
    if (mamtaCostEl) mamtaCostEl.textContent = formatter.format(mamtaTotal) + ' / mo';
    if (netSavingsEl) netSavingsEl.textContent = formatter.format(netSavings) + ' / mo';
  }

  slider.addEventListener('input', updateCalculations);
  updateCalculations();
}
