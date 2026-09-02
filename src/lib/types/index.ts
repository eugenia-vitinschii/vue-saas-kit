/* SIDEBAR */

export interface MenuItem{
   id: string
   label: string
   icon?: string
   to?: string
   badge?: string | number
   children?: MenuItem[]
}

/* HEADER USER  */
export interface UserProfile{
   name: string
   email?: string
   avatar?: string
   role?: string
}