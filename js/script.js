function changeButton() {
  console.log('MFIENFIFINE');
  if (document.getElementById('followed_button_1')) {
    console.log('MOUWHAHAHAHAH');
    document.getElementById('followed_button_1').id = 'unfollowed_button';
    document.getElementById('unfollowed_button').textContent = 'Unfollow';
    } else{
    document.getElementById('unfollowed_button').id = 'followed_button_1';
    document.getElementById('followed_button_1').textContent = 'Follow';

    console.log('eieieieieiie1111111');
  }
}
