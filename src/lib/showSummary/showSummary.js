export default function showSummary() {
    if(document.getElementById('calculationSummary').hasAttribute('class')){
        document.getElementById('calculationSummary').removeAttribute('class');
    }
    if(document.getElementById('mortgageSummary').hasAttribute('class')){
        document.getElementById('mortgageSummary').removeAttribute('class');
    }
}