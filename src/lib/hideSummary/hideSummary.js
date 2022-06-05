export default function hideSummary() {
    if(!document.getElementById('calculationSummary').hasAttribute('class')){
        document.getElementById('calculationSummary').classList.add('hidden');
    }
    if(!document.getElementById('mortgageSummary').hasAttribute('class')){
        document.getElementById('mortgageSummary').classList.add('hidden');
    }
}