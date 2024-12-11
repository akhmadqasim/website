from django_cron import CronJobBase, Schedule
from .models import UserInfo
from django.utils import timezone


class ResetApiLimitCronJob(CronJobBase):
    RUN_AT_TIMES = ['00:00']

    schedule = Schedule(run_at_times=RUN_AT_TIMES)
    code = 'users.reset_api_limit_cron_job'  # a unique code

    def do(self):
        users_info = UserInfo.objects.all()
        for user_info in users_info:
            user_info.api_used = 0
            user_info.last_api_reset = timezone.now()
            user_info.save()
