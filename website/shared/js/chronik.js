check_visibility=function(){var c=document.getElementById("time_illa");var a=document.getElementById("time_select_illa");var b=document.getElementById("time_select_rl");if(c.checked){a.style.display="block";b.style.display="none"}else{b.style.display="block";a.style.display="none"}};change_month_illa=function(){var a=document.getElementById("time_illa_day");var c=document.getElementById("time_illa_month");if((c.selectedIndex==15)&&(a.length==24)){for(var b=5;b<24;b++){a[5]=null}}else{if((c.selectedIndex!=15)&&(a.length<24)){for(var b=5;b<24;b++){a[b]=new Option((b+1)+".",(b+1))}}}};change_date_rl=function(){var b=document.getElementById("time_rl_day");var e=document.getElementById("time_rl_month");var d=document.getElementById("time_rl_year");var a=(e.selectedIndex==0)||(e.selectedIndex==2)||(e.selectedIndex==4)||(e.selectedIndex==6)||(e.selectedIndex==7)||(e.selectedIndex==9)||(e.selectedIndex==11);if(a&&(b.length!=31)){while(b.length!=31){b[b.length]=new Option((b.length+1)+".",(b.length+1))}}else{if(e.selectedIndex==1){var c=(d.value%4==0)&&((d.value%100!=0)||(d.value%400==0));if(c&&b.length!=29){if(b.length>29){while(b.length!=29){b[29]=null}}else{while(b.length!=29){b[b.length]=new Option((b.length+1)+".",(b.length+1))}}}else{if(b.length!=28){if(b.length>28){while(b.length!=28){b[28]=null}}else{while(b.length!=28){b[b.length]=new Option((b.length+1)+".",(b.length+1))}}}}}else{if(b.length!=30){if(b.length>30){while(b.length!=30){b[30]=null}}else{while(b.length!=30){b[b.length]=new Option((b.length+1)+".",(b.length+1))}}}}}};window.onload=function(){check_visibility();change_month_illa();change_date_rl()};