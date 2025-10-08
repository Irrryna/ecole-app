'use client'

import { approveUser } from './actions'

// Définissons un type pour les profils que nous recevons
// Idéalement, ce type serait partagé (ex: dans un fichier types.ts)
export type Profile = {
  id: string
  full_name: string | null
  role: string
  status: string
}

export default function UserList({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{profile.full_name || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profile.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    profile.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {profile.status === 'approved' ? 'Approuvé' : 'En attente'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {profile.status === 'pending_approval' && (
                  <form action={() => approveUser(profile.id)}>
                    <button
                      type="submit"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Approuver
                    </button>
                  </form>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
