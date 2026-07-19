/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

type Person = {
  imageId: number
  name: string
  role: string
}

// Lorem Picsum is mostly landscapes, so these ids are hand-picked: each one is a photo in which a
// person is actually visible. Swapping in an arbitrary id will put scenery on a council member’s card.
export const councilMembers: Person[] = [
  {
    imageId: 1005,
    name: 'Karin Bosman',
    role: 'Fractievoorzitter',
  },
  {
    imageId: 856,
    name: 'Erik Schmit',
    role: 'Vicefractievoorzitter',
  },
  {
    imageId: 823,
    name: 'Nadia el Bouazzaoui',
    role: 'Raadslid en fractiesecretaris',
  },
  {
    imageId: 64,
    name: 'Jorrit Bakker',
    role: 'Raadslid',
  },
  {
    imageId: 1027,
    name: 'Sanne de Groot',
    role: 'Raadslid',
  },
  {
    imageId: 91,
    name: 'Mustafa Yilmaz',
    role: 'Raadslid',
  },
  {
    imageId: 375,
    name: 'Willemijn Verhoeven',
    role: 'Raadslid',
  },
  {
    imageId: 1012,
    name: 'Daan Hoekstra',
    role: 'Raadslid',
  },
  {
    imageId: 838,
    name: 'Ilse Vermeulen',
    role: 'Raadslid',
  },
]

export const groupRepresentatives: Person[] = [
  {
    imageId: 65,
    name: 'Karim Ouahid',
    role: 'Fractievertegenwoordiger',
  },
  {
    imageId: 646,
    name: 'Marloes Bergman',
    role: 'Fractievertegenwoordiger',
  },
  {
    imageId: 669,
    name: 'Ruben van Dijk',
    role: 'Fractievertegenwoordiger',
  },
]
