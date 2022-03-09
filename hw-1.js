const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'file.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
]

// 17 id değerli dosyayi 6.klasöre taşiyacak
const move = (file_id, folder_id) => {
    folders.map((folder) => {
      if(folder.files) {
        const file = folder.files.filter(file => file.id === file_id)
        if(folder.id === folder_id) {
          folder.files.push(file) 
          console.log(folder);
        } 
       console.log(file);
      }
    })
  }


 

// 18 id değerli dosyayi 7 id değerli dosyaya taşiyacak
const copy = (file_id, folder_id) => {
    folders.map((folder)=> {
       if(folder.files) {
         const file = folder.files.filter(file => file.id === file_id)
         if(folder.id === folder_id){
           folder.files.push(file)
           console.log(folder);
         }
       }
     })
     
   }
   



// dosya id değerine göre silecek
const remove = (file_id ) => {
  folders.map((folder) => {
    if(folder.files) {
      const file = folder.files.filter(item => item.id === file_id)
       folder.files.splice(file)
       console.log(folder.files);
    }
  })
 
}



// 6 id değerli klasorü ve altindaki tüm dosyalari silecek
const removeFolder =(folderId) => {
    const newFolders = folders.filter(folder =>
      folder.id !== folderId
    )
    console.log(newFolders);
  }
  



// dosyanın id bilgisini dönecek
const parentFolderOf = (file_id) => {
  folders.map((folder) => {
    if(folder.files && folder.files.length > 0) {
      folder.files.map((file) => {
        if(file.id === file_id) {
          console.log(folder.id);
        }
      })
    }
  })
}



