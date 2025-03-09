import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FiHome, FiActivity, FiBarChart2, FiSettings, FiSlack, FiImage, 
  FiFileText, FiUsers, FiCreditCard, FiDollarSign, FiClock,
  FiHelpCircle, FiMessageSquare, FiAlertCircle, FiUser,
  FiLock, FiSliders, FiUserPlus, FiList, FiShoppingCart, FiTrendingUp, FiLayout,
  FiBell, FiCheckCircle
} from 'react-icons/fi';
import { IoDiamond } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa6';
import { useNotifications } from '../../contexts/NotificationContext';

function DashboardLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const { unreadCount } = useNotifications();
  
  // Determine active section based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/dashboard/tokens')) {
      setActiveSection('tokens');
    } else if (path.includes('/dashboard/billing')) {
      setActiveSection('billing');
    } else if (path.includes('/dashboard/help')) {
      setActiveSection('help');
    } else if (path.includes('/dashboard/account')) {
      setActiveSection('account');
    } else if (path.includes('/dashboard/notifications')) {
      setActiveSection('notifications');
    } else {
      setActiveSection('dashboard');
    }
  }, [location.pathname]);
  
  // Dashboard section menu items
  const dashboardMenuItems = [
    {
      path: '/dashboard',
      label: 'Overview',
      icon: <FiHome className="mr-2" />
    },
    {
      path: '/dashboard/activity',
      label: 'Recent Activity',
      icon: <FiActivity className="mr-2" />
    },
    {
      path: '/dashboard/usage',
      label: 'Overall Usage',
      icon: <FiBarChart2 className="mr-2" />
    },
    {
      path: '/dashboard/quicksetup',
      label: 'Quick Setup',
      icon: <FiSettings className="mr-2" />
    }
  ];
  
  // Token management section menu items
  const tokenMenuItems = [
    {
      path: '/dashboard/tokens',
      label: 'Token Balance',
      icon: <FaRobot className="mr-2" />
    },
    {
      path: '/dashboard/tokens/purchase',
      label: 'Purchase Tokens',
      icon: <FiShoppingCart className="mr-2" />
    },
    {
      path: '/dashboard/tokens/history',
      label: 'Usage History',
      icon: <FiClock className="mr-2" />
    },
    {
      path: '/dashboard/tokens/settings',
      label: 'Token Settings',
      icon: <FiSettings className="mr-2" />
    }
  ];
  
  // Billing section menu items
  const billingMenuItems = [
    {
      path: '/dashboard/billing',
      label: 'Subscription Plans',
      icon: <FiCreditCard className="mr-2" />
    },
    {
      path: '/dashboard/billing/payment',
      label: 'Payment Methods',
      icon: <FiDollarSign className="mr-2" />
    },
    {
      path: '/dashboard/billing/transactions',
      label: 'Transaction History',
      icon: <FiList className="mr-2" />
    },
    {
      path: '/dashboard/billing/invoices',
      label: 'Invoices',
      icon: <FiFileText className="mr-2" />
    }
  ];
  
  // Help section menu items
  const helpMenuItems = [
    {
      path: '/dashboard/help',
      label: 'Documentation',
      icon: <FiHelpCircle className="mr-2" />
    },
    {
      path: '/dashboard/help/faqs',
      label: 'FAQs',
      icon: <FiMessageSquare className="mr-2" />
    },
    {
      path: '/dashboard/help/support',
      label: 'Contact Support',
      icon: <FiMessageSquare className="mr-2" />
    },
    {
      path: '/dashboard/help/status',
      label: 'System Status',
      icon: <FiAlertCircle className="mr-2" />
    }
  ];
  
  // Account section menu items
  const accountMenuItems = [
    {
      path: '/dashboard/account',
      label: 'Profile',
      icon: <FiUser className="mr-2" />
    },
    {
      path: '/dashboard/account/organization',
      label: 'Organization',
      icon: <FiLayout className="mr-2" />
    },
    {
      path: '/dashboard/account/security',
      label: 'Security',
      icon: <FiLock className="mr-2" />
    },
    {
      path: '/dashboard/account/team',
      label: 'Team Members',
      icon: <FiUsers className="mr-2" />
    }
  ];
  
  // Notifications section menu items
  const notificationsMenuItems = [
    {
      path: '/dashboard/notifications',
      label: 'All Notifications',
      icon: <FiBell className="mr-2" />
    },
    {
      path: '/dashboard/notifications?filter=unread',
      label: 'Unread',
      icon: <FiAlertCircle className="mr-2" />
    },
    {
      path: '/dashboard/notifications?filter=pending',
      label: 'Pending Approval',
      icon: <FiClock className="mr-2" />
    },
    {
      path: '/dashboard/notifications?filter=completed',
      label: 'Completed',
      icon: <FiCheckCircle className="mr-2" />
    },
    {
      path: '/dashboard/notifications?filter=alerts',
      label: 'Alerts',
      icon: <FiAlertCircle className="mr-2" />
    }
  ];
  
  // AI Agents section - always shown at the bottom
  const agentsMenuItems = [
    {
      path: '/dashboard/settings/support',
      label: 'Slack App',
      icon: <FiSlack className="mr-2" />
    },
    {
      path: '/dashboard/settings/team',
      label: 'Image Creator',
      icon: <FiImage className="mr-2" />
    },
    {
      path: '/dashboard/settings/analytics',
      label: 'Copy Creator',
      icon: <FiFileText className="mr-2" />
    }
  ];
  
  // Determine which menu items to show based on active section
  const getActiveMenuItems = () => {
    switch (activeSection) {
      case 'tokens':
        return tokenMenuItems;
      case 'billing':
        return billingMenuItems;
      case 'help':
        return helpMenuItems;
      case 'account':
        return accountMenuItems;
      case 'notifications':
        return notificationsMenuItems;
      default:
        return dashboardMenuItems;
    }
  };
  
  // No section navigation buttons needed as they're in the top navigation

  return (
    <div className="max-w-[1440px] mx-auto px-8">
      {/* Title header removed */}
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 shrink-0">
          {/* Contextual Section Menu */}
          <div className="bg-[#1F242B] rounded-2xl shadow-2xl border border-white/5 p-4">
            <h2 className="text-xl font-bold text-white mb-4 px-2">
              {activeSection === 'account' ? 'My Account' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>
            <nav>
              <ul className="space-y-1">
                {/* Section-specific menu items */}
                {getActiveMenuItems().map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'text-gray-300 hover:bg-black/20 hover:text-white'
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                
                {/* Only show AI Agents section at the bottom when in Dashboard section */}
                {activeSection === 'dashboard' && (
                  <>
                    <li className="border-t border-white/5 my-3"></li>
                    <li className="text-emerald-400 text-xs uppercase font-bold px-3 py-2">AI Agents</li>
                    {agentsMenuItems.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                              isActive
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'text-gray-300 hover:bg-black/20 hover:text-white'
                            }`}
                          >
                            {item.icon}
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
