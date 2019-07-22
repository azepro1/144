$(function () {

  //ページネーションの数字をクリックされた時の動き
  $('.page').click(function () {
    //最大ページ数を取得
    var $max_page = 12;
    var $clicked_page_number = Number($(this).text());

    //1.ページネーションを送る
    //クリックされたページの取得
    if ($clicked_page_number <= 2) {
      $('.initial-page').css('display', 'none');
      $('.last-page').css('display', 'inline');
      $('.first-page').text(1);
      $('.second-page').text(2);
      $('.third-page').text(3);
      $('.fourth-page').text(4);
      $('.fifth-page').text(5);
    } else if ($clicked_page_number >= 3 && $clicked_page_number <= ($max_page - 6)) {
      $('.initial-page').css('display', 'inline');
      $('.last-page').css('display', 'inline');
      $('.first-page').text($clicked_page_number);
      $('.second-page').text($clicked_page_number + 1);
      $('.third-page').text($clicked_page_number + 2);
      $('.fourth-page').text($clicked_page_number + 3);
      $('.fifth-page').text($clicked_page_number + 4);
    } else if ($clicked_page_number === ($max_page - 5)) {
      $('.initial-page').css('display', 'inline');
      $('.last-page').css('display', 'none');
      $('.first-page').text($clicked_page_number);
      $('.second-page').text($clicked_page_number + 1);
      $('.third-page').text($clicked_page_number + 2);
      $('.fourth-page').text($clicked_page_number + 3);
      $('.fifth-page').text($clicked_page_number + 4);
    } else if ($clicked_page_number >= ($max_page - 4)) {
      $('.initial-page').css('display', 'inline');
      $('.last-page').css('display', 'none');
      $('.first-page').text($max_page - 4);
      $('.second-page').text($max_page - 3);
      $('.third-page').text($max_page - 2);
      $('.fourth-page').text($max_page - 1);
      $('.fifth-page').text($max_page);
    }

    //2. クリックされたページの色を変える
    var $contained_pages = $(".color-changable:contains(" + $clicked_page_number + ")");

    for (var i = 0; i < $contained_pages.length; i++) {
      var $contained_page = $contained_pages[i];
      var $contained_page_number = $($contained_page).text();
      $contained_page_number = Number($contained_page_number);
      if ($contained_page_number === $clicked_page_number) {
        var $current_page = $('.pagenation').find('.selected-page');
        $($current_page).removeClass('selected-page');
        $($contained_page).addClass('selected-page');
      }

    }


  });
　
  //前へボタンをクリックされた時の動き　
  $('.move-to-before-news').click(function () {
    var $max_page = 12;
    var $current_page = $('.pagenation').find('.selected-page');
    var $current_page_number = $($current_page).text();
    $current_page_number = Number($current_page_number);
    
    //1.ページネーションを送る
    //ToDo: 実装する
    //2. クリックされたページの色を変える
    //ToDo: 実装する
  });


});