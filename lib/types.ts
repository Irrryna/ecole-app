export type Profile = {
  id: string;
  display_name: string;
  role: 'admin' | 'parent' | 'teacher';
  approval_status: 'pending' | 'approved';
  email: string;
};

export type Homework = {
  id: string;
  title: string;
  due_at: string;
};
