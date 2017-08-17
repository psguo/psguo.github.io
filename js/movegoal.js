var moveGoal = 
{
  "header": {
    "stamp": {
      "secs": 546,
      "nsecs": 790000000
    },
    "frame_id": "",
    "seq": 2
  },
  "goal_id": {
    "stamp": {
      "secs": 546,
      "nsecs": 790000000
    },
    "id": "/rviz_ps_Lap_5381_2026825224643838086-3-546.790000000"
  },
  "goal": {
    "planning_options": {
      "replan_delay": 0,
      "replan": false,
      "plan_only": true,
      "look_around_attempts": 0,
      "look_around": false,
      "planning_scene_diff": {
        "fixed_frame_transforms": [],
        "allowed_collision_matrix": {
          "default_entry_names": [],
          "entry_values": [],
          "entry_names": [],
          "default_entry_values": []
        },
        "robot_model_name": "",
        "name": "",
        "link_padding": [],
        "robot_state": {
          "is_diff": true,
          "attached_collision_objects": [],
          "multi_dof_joint_state": {
            "twist": [],
            "header": {
              "stamp": {
                "secs": 0,
                "nsecs": 0
              },
              "frame_id": "",
              "seq": 0
            },
            "joint_names": [],
            "transforms": [],
            "wrench": []
          },
          "joint_state": {
            "header": {
              "stamp": {
                "secs": 0,
                "nsecs": 0
              },
              "frame_id": "",
              "seq": 0
            },
            "velocity": [],
            "effort": [],
            "name": [],
            "position": []
          }
        },
        "is_diff": true,
        "object_colors": [],
        "world": {
          "collision_objects": [],
          "octomap": {
            "origin": {
              "position": {
                "y": 0,
                "x": 0,
                "z": 0
              },
              "orientation": {
                "y": 0,
                "x": 0,
                "z": 0,
                "w": 0
              }
            },
            "header": {
              "stamp": {
                "secs": 0,
                "nsecs": 0
              },
              "frame_id": "",
              "seq": 0
            },
            "octomap": {
              "header": {
                "stamp": {
                  "secs": 0,
                  "nsecs": 0
                },
                "frame_id": "",
                "seq": 0
              },
              "resolution": 0,
              "id": "",
              "data": [],
              "binary": false
            }
          }
        },
        "link_scale": []
      },
      "replan_attempts": 0,
      "max_safe_execution_cost": 0
    },
    "request": {
      "goal_constraints": [
        {
          "orientation_constraints": [],
          "position_constraints": [],
          "visibility_constraints": [],
          "joint_constraints": [
            {
              "tolerance_below": 0.0001,
              "position": 0.23672647698341032,
              "joint_name": "shoulder_pan_joint",
              "weight": 1,
              "tolerance_above": 0.0001
            },
            {
              "tolerance_below": 0.0001,
              "position": -1.615762988625868,
              "joint_name": "shoulder_lift_joint",
              "weight": 1,
              "tolerance_above": 0.0001
            },
            {
              "tolerance_below": 0.0001,
              "position": 1.7333053792417765,
              "joint_name": "elbow_joint",
              "weight": 1,
              "tolerance_above": 0.0001
            },
            {
              "tolerance_below": 0.0001,
              "position": -0.11754232390972502,
              "joint_name": "wrist_1_joint",
              "weight": 1,
              "tolerance_above": 0.0001
            },
            {
              "tolerance_below": 0.0001,
              "position": 0.23786554115377834,
              "joint_name": "wrist_2_joint",
              "weight": 1,
              "tolerance_above": 0.0001
            },
            {
              "tolerance_below": 0.0001,
              "position": 0.0033628198826095375,
              "joint_name": "wrist_3_joint",
              "weight": 1,
              "tolerance_above": 0.0001
            }
          ],
          "name": ""
        }
      ],
      "trajectory_constraints": {
        "constraints": []
      },
      "start_state": {
        "is_diff": false,
        "attached_collision_objects": [],
        "multi_dof_joint_state": {
          "twist": [],
          "header": {
            "stamp": {
              "secs": 0,
              "nsecs": 0
            },
            "frame_id": "/world",
            "seq": 0
          },
          "joint_names": [],
          "transforms": [],
          "wrench": []
        },
        "joint_state": {
          "header": {
            "stamp": {
              "secs": 0,
              "nsecs": 0
            },
            "frame_id": "/world",
            "seq": 0
          },
          "velocity": [],
          "effort": [],
          "name": [
            "shoulder_pan_joint",
            "shoulder_lift_joint",
            "elbow_joint",
            "wrist_1_joint",
            "wrist_2_joint",
            "wrist_3_joint"
          ],
          "position": [
            -0.0011346045631857038,
            0.003291985833214106,
            0.000007624053405486109,
            0.000057746626631605125,
            0.000004382391941781805,
            0.000005528319324987763
          ]
        }
      },
      "max_acceleration_scaling_factor": 1,
      "group_name": "manipulator",
      "num_planning_attempts": 10,
      "allowed_planning_time": 5,
      "workspace_parameters": {
        "header": {
          "stamp": {
            "secs": 546,
            "nsecs": 790000000
          },
          "frame_id": "/world",
          "seq": 0
        },
        "max_corner": {
          "y": 1,
          "x": 1,
          "z": 1
        },
        "min_corner": {
          "y": -1,
          "x": -1,
          "z": -1
        }
      },
      "max_velocity_scaling_factor": 1,
      "path_constraints": {
        "orientation_constraints": [],
        "position_constraints": [],
        "visibility_constraints": [],
        "joint_constraints": [],
        "name": ""
      },
      "planner_id": ""
    }
  }
};