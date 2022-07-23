// selecting required element
const ulteg = document.querySelector('ul.pagination');
let totalpages = 20;

function element(totalpages, page) {
  let litag = '';
  let activeLi;
  let beforepages = page - 1; // 5-1=4
  let afterpages = page + 1; // 5+1=6
  if (page > 1) {
    litag += '<li class="page-item" onclick="element(totalpages,' + beforepages + ')"><a class="page-link">prev</a></li>';
  }
  if (page > 2) {
    litag += '<li class="page-item" onclick="element(totalpages, 1)"><span class="page-link">1</span></li>';
    if (page > 3) {
      litag += '<li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>';
    }
  }
  // before
  if (page == totalpages) {
    beforepages = beforepages - 2;
  } else if (page == totalpages - 1) {
    beforepages == beforepages - 1;
  }
  // after
  if (page == 1) {
    afterpages = afterpages + 2;
  } else if (page == 2) {
    afterpages == afterpages + 1;
  }

  for (let pagelength = beforepages; pagelength <= afterpages; pagelength++) {
    if (pagelength > totalpages) {
      continue;
    }
    if (pagelength == 0) {
      pagelength = pagelength + 1;
    }
    if (page == pagelength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }

    litag += '<li class="page-item ' + activeLi + '" onclick="element(totalpages, ' + pagelength + ')"><a class="page-link">' + pagelength + '</a></li>';
  }
  if (page < totalpages - 1) {
    if (page < totalpages - 2) {
      litag += '<li class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>';
    }
    litag += '<li class="page-item" onclick="element(totalpages, ' + totalpages + ')" aria-current="page"><span class="page-link">' + totalpages + '</span></li>';
  }
  if (page < totalpages) {
    litag += '<li class="page-item"><a class="page-link"  onclick="element(totalpages, ' + afterpages + ')" rel="next" aria-label="Next »">Next »</a></li>';
  }
  ulteg.innerHTML = litag;
}
element(totalpages, 1);
