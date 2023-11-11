export const ROLES = [
    {
      id: 1,
      name: 'ADMIN',
      permissions: [
        'DOCUMENTOS:READ',
        'DOCUMENTOS:DELETE',
        'DOCUMENTOS:UPDATE',
        'BASE_DE_DATOS:READ',
        'BASE_DE_DATOS:DELETE',
        'BASE_DE_DATOS:UPDATE',
        'VENTAS:READ',
        'VENTAS:DELETE',
        'VENTAS:UPDATE',
        'VENTAS:CREATE'
      ]
    },
    {
      id: 2,
      name: 'USER',
      permissions: [
        'DOCUMENTOS:READ',
        'DOCUMENTOS:DELETE',
        'DOCUMENTOS:UPDATE',
      ]
    },
    {
      id: 2,
      name: 'ADVANCED_USER',
      permissions: [
        'DOCUMENTOS:READ',
        'DOCUMENTOS:DELETE',
        'DOCUMENTOS:UPDATE',
        'VENTAS:READ',
        'VENTAS:DELETE',
        'VENTAS:UPDATE',
      ]
    },
  ]
export const ENTITIES = [
    {
      id:1,
      name:'DOCUMENTOS',
      permisions:[
        'READ',
        'UPDATE',
        'DELETE'
      ]
    },
    {
      id:2,
      name:'BASE_DE_DATOS',
      permisions:[
        'READ',
        'UPDATE',
        'DELETE'
      ]
    },
    {
      id:3,
      name:'VENTAS',
      permisions:[
        'READ',
        'UPDATE',
        'DELETE',
        'CREATE'
      ]
    },
  ]