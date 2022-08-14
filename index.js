<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Email sender</title>
  </head>
<body>
<form action='/send-email' method='post'>
<fieldset>
<legend>Email sender</legend>
<table>
<tr>
<td>From:</td>
<td><input type='email' placeholder='youremail' id='youremail' name='from'></td></tr>
<tr>
<td>To:</td>
<td><input type='email' id='youremail' name='to'></td></tr>
<tr>
<td>Subject:</td>
<td><input type='text' id='youremail' name='subject'></td></tr>
<tr>
<td>Message:</td>
<td><textarea id='message' name='message'></textarea></td></tr>
</table>
<input type='submit'>
</fieldset>
</form>
</body>
</html>
