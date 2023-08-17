# extraction de dossiers zip
<#
- Apprendre regex && syntaxe powershell
- ^4\.[1-4] pour les documents commençant par 4.1 ... 4.4
#>
# permet d'extraire tous les dossiers dont le nom commence par un caractère regex spécifique 
Get-ChildItem -Path 'C:\Users\Administrateur\Downloads' *.zip | Where-Object{$_.Name -match "Drawkit"} | ForEach-Object {
    Expand-Archive -path $_.FullName -DestinationPath "C:\Users\Administrateur\Documents\nodeJS-modules-test\"
}
